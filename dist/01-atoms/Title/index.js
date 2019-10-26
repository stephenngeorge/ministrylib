/**
 * TITLE
 * 
 * Title component displays a text heading using 
 * any level of <h> tag as specified in props, or 
 * defaulting to <h1> if no number is provided
 * 
 */
import React from 'react';
import defaults from './defaults';

var Title = function Title(_ref) {
  var additionalClasses = _ref.additionalClasses,
      headingId = _ref.headingId,
      headingLevel = _ref.headingLevel,
      headingText = _ref.headingText;
  if (defaults.headingLevel.range.indexOf(headingLevel) < 0) console.warn(defaults.headingLevel.warning);
  var TitleTag = "h".concat(headingLevel);
  return headingText.length > 0 && headingText !== null && headingText !== undefined ? React.createElement(TitleTag, {
    className: "title ".concat(additionalClasses.join(' ')),
    id: headingId
  }, headingText) : null;
};

Title.defaultProps = {
  additionalClasses: defaults.additionalClasses.value,
  headingId: defaults.headingId.value,
  headingLevel: defaults.headingLevel.value
};
export default Title;