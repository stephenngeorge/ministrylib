/**
 * HERO TEXT
 * 
 * HeroText component displays a heading with supporting 
 * text. Comprises <Title /> and <PlainText /> components 
 * which can be found in the 'atoms' directory
 * 
*/
import React, { useEffect } from 'react';
import defaults from './defaults';
import { Title, PlainText } from '../../01-atoms';

var HeroText = function HeroText(_ref) {
  var additionalClasses = _ref.additionalClasses,
      bodyText = _ref.bodyText,
      headingText = _ref.headingText;
  useEffect(function () {
    var positionText = function positionText() {
      var titleHeight = Math.floor(document.querySelector('.text--site-title').offsetHeight);
      var textBlock = document.querySelector('.hero-textBlock');
      var yOffset = Math.ceil(-titleHeight / 2);
      textBlock.style.marginTop = "".concat(yOffset, "px");
    };

    positionText();
    window.addEventListener('resize', positionText);
    return function () {
      return document.removeEventListener('resize', positionText);
    };
  }, []);
  return React.createElement("div", {
    className: "hero-textBlock ".concat(additionalClasses.join(' '))
  }, React.createElement("div", {
    className: "content"
  }, React.createElement(Title, {
    headingLevel: 1,
    headingText: headingText,
    additionalClasses: ['text--site-title', 'font-weight--heavy', 'title__padded-text--main', 'color--light']
  }), React.createElement(PlainText, {
    additionalClasses: ['text--lead', 'font-weight--light'],
    text: bodyText
  })));
};

HeroText.defaultProps = {
  additionalClasses: defaults.additionalClasses.value,
  headingText: defaults.headingText.value
};
export default HeroText;