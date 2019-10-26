/**
 * BUTTON
 * 
 * Button components can be many different 
 * elements but all will contain some text 
 * and have either a url to redirect to, or 
 * a click handler function
 * 
 */
import React from 'react';
import defaults from './defaults';

var Button = function Button(_ref) {
  var additionalClasses = _ref.additionalClasses,
      buttonBlock = _ref.buttonBlock,
      buttonColor = _ref.buttonColor,
      buttonElement = _ref.buttonElement,
      buttonId = _ref.buttonId,
      buttonLink = _ref.buttonLink,
      buttonOnClick = _ref.buttonOnClick,
      buttonOutline = _ref.buttonOutline,
      buttonSize = _ref.buttonSize,
      buttonText = _ref.buttonText;

  // warn about invalid props values
  if (defaults.buttonSize.range.indexOf(buttonSize.toLowerCase().trim()) < 0) {
    console.warn(defaults.buttonSize.warning);
  }

  if (defaults.buttonColor.range.indexOf(buttonColor.toLowerCase().trim()) < 0) {
    console.warn(defaults.buttonColor.warning);
  }

  if (defaults.buttonOutline.range.indexOf(buttonOutline) < 0) {
    console.warn(defaults.buttonOutline.warning);
  } // set button classes based on props


  var buttonClasses = {
    baseClasses: "button ".concat(additionalClasses.join(' '), " "),
    buttonColor: "button--color-".concat(buttonColor, " "),
    buttonSize: "button--size-".concat(buttonSize, " ")
  };
  if (!!buttonBlock) buttonClasses.buttonBlock = 'button--block ';
  if (!!buttonOutline) buttonClasses.buttonOutline = "button-outline--color-".concat(buttonOutline); // manipulate buttonClasses object into one string
  // that can be set as button.className

  var classes = '';
  Object.keys(buttonClasses).forEach(function (key) {
    classes += buttonClasses[key];
  }); // define attributes, warn about incorrect props patterns

  var link, handleClick;

  if (buttonElement === 'a') {
    if (buttonLink === null) console.warn(defaults.buttonLink.warning);
    link = buttonLink;
  }

  if (buttonElement === 'button') {
    if (buttonOnClick === null) console.warn(defaults.buttonOnClick.warning);
    handleClick = buttonOnClick;
  } // either href or onClick will be null, so react will not 
  // set that attribute


  var attribs = {
    id: buttonId.length > 0 ? buttonId : null,
    href: link,
    onClick: handleClick
  };
  var HTMLTag = buttonElement.trim();
  return React.createElement(HTMLTag, Object.assign({}, attribs, {
    className: classes
  }), buttonText);
};

Button.defaultProps = {
  additionalClasses: defaults.additionalClasses.value,
  buttonBlock: defaults.buttonBlock.value,
  buttonColor: defaults.buttonColor.value,
  buttonElement: defaults.buttonElement.value,
  buttonId: defaults.buttonId.value,
  buttonLink: defaults.buttonLink.value,
  buttonOnClick: defaults.buttonOnClick.value,
  buttonOutline: defaults.buttonOutline.value,
  buttonSize: defaults.buttonSize.value
};
export default Button;