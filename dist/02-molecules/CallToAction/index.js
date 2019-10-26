/**
 * CALL TO ACTION
 * 
 * CallToAction components are full-width blocks 
 * that contain a title, a body of text and a button
 * 
 */
import React from 'react';
import defaults from './defaults';
import { Button, PlainText, Title } from '../../01-atoms';

var CallToAction = function CallToAction(_ref) {
  var additionalClasses = _ref.additionalClasses,
      backgroundColor = _ref.backgroundColor,
      buttonColor = _ref.buttonColor,
      buttonElement = _ref.buttonElement,
      buttonLink = _ref.buttonLink,
      buttonOnClick = _ref.buttonOnClick,
      buttonOutline = _ref.buttonOutline,
      buttonText = _ref.buttonText,
      headingId = _ref.headingId,
      headingLevel = _ref.headingLevel,
      headingText = _ref.headingText,
      paragraphId = _ref.paragraphId,
      paragraphText = _ref.paragraphText;
  // warn about defaults
  if (buttonElement !== 'a') console.warn(defaults.buttonElement.warning);
  return React.createElement("section", {
    className: "call-to-action container--full-width bg--".concat(backgroundColor, " ").concat(additionalClasses.join(' '))
  }, React.createElement("div", {
    className: "call-to-action__text-content text-container--very-narrow"
  }, headingText !== defaults.headingText.value && React.createElement(Title, {
    additionalClasses: ["color--dark"],
    headingId: headingId,
    headingLevel: headingLevel,
    headingText: headingText
  }), React.createElement(PlainText, {
    paragraphId: paragraphId,
    text: paragraphText
  })), React.createElement("div", {
    className: "call-to-action__button-container"
  }, React.createElement(Button, {
    buttonColor: buttonColor,
    buttonText: buttonText,
    buttonElement: buttonElement,
    buttonLink: buttonLink,
    buttonOnClick: buttonOnClick,
    buttonOutline: buttonOutline,
    buttonSize: "large"
  })));
};
/**
 * Button props:
 *      - buttonBlock: left to Button default
 *      - buttonSize: passed down as 'large' by force
 */


CallToAction.defaultProps = {
  additionalClasses: defaults.additionalClasses.value,
  buttonColor: defaults.buttonColor.value,
  buttonElement: defaults.buttonElement.value,
  buttonOutline: defaults.buttonOutline.value,
  headingId: defaults.headingId.value,
  headingLevel: defaults.headingLevel.value,
  headingText: defaults.headingText.value,
  paragraphId: defaults.paragraphId.value
};
export default CallToAction;