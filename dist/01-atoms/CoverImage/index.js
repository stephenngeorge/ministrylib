/**
 * COVER IMAGE
 * 
 * CoverImage component displays an image from a given source
 * in a container div. It is full-width and uses object-fit
 * to ensure that the image always fills the container
 * 
 * @todo install and import object-fit polyfill
 * 
 */
import React from 'react';
import defaults from './defaults';

var CoverImage = function CoverImage(_ref) {
  var additionalClasses = _ref.additionalClasses,
      altText = _ref.altText,
      imageId = _ref.imageId,
      imageUrl = _ref.imageUrl;
  // warn about defaults
  if (altText === defaults.altText.value) console.warn(defaults.altText.warning);
  return imageUrl.length > 0 && imageUrl !== null && imageUrl !== undefined ? React.createElement("div", {
    className: "cover-image cover-image__image-container ".concat(additionalClasses.join(' '))
  }, React.createElement("img", {
    src: imageUrl,
    alt: altText,
    id: imageId
  })) : null;
};

CoverImage.defaultProps = {
  additionalClasses: defaults.additionalClasses.value,
  altText: defaults.altText.value,
  imageId: defaults.imageId.value
};
export default CoverImage;