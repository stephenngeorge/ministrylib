/**
 * PLAIN TEXT
 * 
 * PlainText component displays a simple paragraph 
 * of text.
 * 
 */
import React from 'react';
import defaults from './defaults';

var PlainText = function PlainText(_ref) {
  var additionalClasses = _ref.additionalClasses,
      paragraphId = _ref.paragraphId,
      text = _ref.text;
  return text.length > 0 && text !== null && text !== undefined ? React.createElement("p", {
    className: "plain-text ".concat(additionalClasses.join(' ')),
    id: paragraphId
  }, text) : null;
};

PlainText.defaultProps = {
  additionalClasses: defaults.additionalClasses.value,
  paragraphId: defaults.paragraphId.value
};
export default PlainText;