/**
 * TEXTLINK
 * 
 * TextLink components display an anchor tag and render either 
 * a <Link> (from the react-router-dom library) or a regular 
 * <a> depending on whether an internal or external resources 
 * is referenced.
 * 
 */
import React from 'react';
import { Link } from 'react-router-dom';
import defaults from './defaults';

var TextLink = function TextLink(_ref) {
  var additionalClasses = _ref.additionalClasses,
      linkText = _ref.linkText,
      linkUrl = _ref.linkUrl,
      variation = _ref.variation;
  // warn about defaults
  if (defaults.variation.range.indexOf(variation) < 0) console.warn(defaults.variation.warning);
  var internalLink = linkText.length > 0 && linkUrl.length > 0 ? React.createElement(Link, {
    to: linkUrl,
    className: "text-link ".concat(additionalClasses.join(' '))
  }, linkText) : null;
  var externalLink = linkText.length > 0 && linkUrl.length > 0 ? React.createElement("a", {
    href: linkUrl,
    className: "text-link ".concat(additionalClasses.join(' '))
  }, linkText) : null;
  return variation === 'internal' ? internalLink : externalLink;
};

TextLink.defaultProps = {
  additionalClasses: defaults.additionalClasses.value,
  variation: defaults.variation.value
};
export default TextLink;