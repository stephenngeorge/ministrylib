import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * HERO IMAGE
 * 
 * HeroImage component displays a full-width image 
 * with configurable height and alt text
 * "Hero" images are designed to be used at the top of 
 * a page, but this component could theoretically be used 
 * in-page as well
 * 
 */
import React, { useEffect, useState } from 'react';
import defaults from './defaults';
import { CoverImage } from '../../01-atoms';

var HeroImage = function HeroImage(_ref) {
  var additionalClasses = _ref.additionalClasses,
      altText = _ref.altText,
      animate = _ref.animate,
      divHeight = _ref.divHeight,
      imageUrl = _ref.imageUrl;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      scroll = _useState2[0],
      setScroll = _useState2[1];

  useEffect(function () {
    if (animate === 'onScroll') {
      var animateImageScale = function animateImageScale() {
        var image = document.querySelector('#hero-image'); // access the transform style of hero-image

        var scaler = (125 - scroll / 8) / 100;
        var saturation = 100 - scroll;
        if (scaler <= 1) scaler = 1;
        if (scaler >= 1.25) scaler = 1.25;
        image.style.transform = "scale(".concat(scaler, ", ").concat(scaler, ")");
        image.style.filter = "saturate(".concat(saturation, "%)");
        setScroll(window.scrollY);
      };

      document.addEventListener('scroll', animateImageScale);
      return function () {
        document.removeEventListener('scroll', animateImageScale);
      };
    }
  }, [animate, scroll]); // warn about defaults

  if (divHeight === defaults.divHeight.value) console.warn(defaults.divHeight.warning);
  if (defaults.animate.range.indexOf(animate) < 0) console.warn(defaults.animate.warning);
  var divStyles = {
    height: "".concat(divHeight.toString(), "vh")
  };
  return React.createElement("div", {
    className: "hero-image ".concat(additionalClasses.join(' ')),
    style: divStyles
  }, React.createElement(CoverImage, {
    altText: altText,
    imageUrl: imageUrl,
    imageId: "hero-image"
  }));
};

HeroImage.defaultProps = {
  additionalClasses: defaults.additionalClasses.value,
  animate: defaults.animate.value,
  divHeight: defaults.divHeight.value
};
export default HeroImage;