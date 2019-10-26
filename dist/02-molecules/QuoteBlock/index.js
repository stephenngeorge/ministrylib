/**
 * QUOTE BLOCK
 * 
 * Quote Blocks are used to display a quotation, in cursive text, 
 * overlaying an optional background image. If no image is provided, 
 * the background should default to the main theme colour.
 * Optionally, a source and citation for the quote can be displayed.
 * 
 * @todo set default background colour
 * 
 */
import React, { useEffect } from 'react';
import defaults from './defaults';
import { CoverImage, PlainText, TextLink } from '../../01-atoms';

var QuoteBlock = function QuoteBlock(_ref) {
  var additionalClasses = _ref.additionalClasses,
      backgroundImage = _ref.backgroundImage,
      citation = _ref.citation,
      citationUrl = _ref.citationUrl,
      quoteText = _ref.quoteText,
      source = _ref.source;
  useEffect(function () {
    var quoteBackground = document.querySelector('.quote-background');
    var textContent = document.querySelector('.quote-block__text-content');

    var setImageHeight = function setImageHeight() {
      if (window.innerWidth < 992) quoteBackground.style.height = "".concat(textContent.offsetHeight + 96, "px");
      if (window.innerWidth >= 992) quoteBackground.style.height = "".concat(textContent.offsetHeight + 128, "px");
    };

    setImageHeight();
    window.addEventListener('resize', setImageHeight);
    return function () {
      window.removeEventListener('resize', setImageHeight);
    };
  }, []); // warn about defaults

  if (citation.length > 0 && citationUrl.length <= 0) {
    console.warn(defaults.citationUrl.warning);
  }

  return React.createElement("section", {
    className: "quote-block ".concat(additionalClasses.join(" "))
  }, React.createElement(CoverImage, {
    additionalClasses: ['quote-background'],
    altText: "bible background",
    imageUrl: backgroundImage
  }), React.createElement("div", {
    className: "quote-block__text-content"
  }, React.createElement(PlainText, {
    additionalClasses: ["font-family--cursive", "quote-text"],
    text: quoteText
  }), React.createElement(PlainText, {
    additionalClasses: ["source-text"],
    text: source
  }), React.createElement(TextLink, {
    linkText: citation,
    linkUrl: citationUrl,
    variation: "external"
  })));
};

QuoteBlock.defaultProps = {
  additionalClasses: defaults.additionalClasses.value,
  citation: defaults.citation.value,
  citationUrl: defaults.citationUrl.value,
  source: defaults.source.value
};
export default QuoteBlock;