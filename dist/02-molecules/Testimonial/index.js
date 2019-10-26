/**
 * TESTIMONIAL
 * 
 * Testimonial components are used to display a quotation that 
 * describes the product. Text is cursive with an optional source 
 * that displays in the sans-serif font.
 * 
 */
import React from 'react';
import defaults from './defaults';
import { PlainText } from '../../01-atoms';

var Testimonial = function Testimonial(_ref) {
  var additionalClasses = _ref.additionalClasses,
      source = _ref.source,
      testimonialText = _ref.testimonialText;
  return React.createElement("section", {
    className: "testimonial container--full-width ".concat(additionalClasses.join(" "))
  }, React.createElement(PlainText, {
    additionalClasses: ['font-family--cursive', 'container', 'no-padding'],
    text: testimonialText
  }), React.createElement(PlainText, {
    additionalClasses: ['source-text', 'container', 'no-padding', 'color--dark'],
    text: source
  }));
};

Testimonial.defaultProps = {
  additionalClasses: defaults.additionalClasses.value,
  source: defaults.source.value
};
export default Testimonial;