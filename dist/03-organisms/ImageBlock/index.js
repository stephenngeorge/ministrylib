/**
 * IMAGE BLOCK
 * 
 * Image Block components are used to display an image with 
 * supporting text to the side. On smaller breakpoints, the 
 * layout collapses to a vertical stack.
 * 
 * @todo provide option for rendereing image on left or right
 * 
 */
import React, { useEffect } from 'react';
import defaults from './defaults';
import { CoverImage, Title, PlainText } from '../../01-atoms';

var ImageBlock = function ImageBlock(_ref) {
  var additionalClasses = _ref.additionalClasses,
      headingText = _ref.headingText,
      imageAltText = _ref.imageAltText,
      imageUrl = _ref.imageUrl,
      leadText = _ref.leadText,
      supportingText = _ref.supportingText;
  useEffect(function () {
    /**
     * positionText moves all of the text content up by half the title height on small breakpoints 
     * so that the title overlaps the image
     */
    var positionText = function positionText() {
      var textBlock = document.querySelector('.image-block__text-content');

      if (window.innerWidth < 992) {
        var titleHeight = Math.floor(document.querySelector('#that-esther-moment').offsetHeight);
        var yOffset = Math.ceil(-titleHeight / 2);
        textBlock.style.marginTop = "".concat(yOffset, "px");
      } else {
        textBlock.style.marginTop = '0px';
      }
    };
    /**
     * setImageHeight establish the height of the image, based on the height of the text content
     */


    var setImageHeight = function setImageHeight() {
      var imageContent = document.querySelector('.image-block__image-content');
      var textBlock = document.querySelector('.image-block__text-content');

      if (window.innerWidth >= 992) {
        imageContent.style.height = "".concat(textBlock.offsetHeight, "px");
      } else {
        imageContent.style.height = '18rem';
      }
    };

    var manipulateDOM = function manipulateDOM() {
      positionText();
      setImageHeight();
    };

    manipulateDOM();
    window.addEventListener('resize', manipulateDOM);
    return function () {
      return document.removeEventListener('resize', manipulateDOM);
    };
  }, []);
  return React.createElement("section", {
    className: "image-block ".concat(additionalClasses.join(" "))
  }, React.createElement("div", {
    className: "image-block__image-content"
  }, React.createElement(CoverImage, {
    altText: imageAltText,
    imageUrl: imageUrl
  })), React.createElement("div", {
    className: "image-block__text-content"
  }, React.createElement(Title, {
    headingLevel: 2,
    headingText: headingText,
    headingId: "that-esther-moment",
    additionalClasses: ['title__padded-text--main']
  }), React.createElement(PlainText, {
    additionalClasses: ['text--lead', 'font-weight--light'],
    text: leadText,
    paragraphId: "image-block--lead-text"
  }), React.createElement(PlainText, {
    additionalClasses: ['font-weight--light'],
    text: supportingText,
    paragraphId: "image-block--supporting-text"
  })));
};

ImageBlock.defaultProps = {
  additionalClasses: defaults.additionalClasses.value,
  supportingText: defaults.supportingText.value
};
export default ImageBlock;