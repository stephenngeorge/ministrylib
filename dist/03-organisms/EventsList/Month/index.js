/**
 * MONTH
 * 
 * Month components are to be nested inside an Event List organism.
 * It receives a subset of the Event List's data - a specific object from 
 * the array. It then renders an <Event /> component for each item in that 
 * data's .events array.
 * 
 */
import React from 'react';
import defaults from './defaults';
import { Event } from '../../../02-molecules';

var Month = function Month(_ref) {
  var additionalClasses = _ref.additionalClasses,
      month = _ref.month;
  return React.createElement("div", {
    className: "month ".concat(additionalClasses.join(" "))
  }, React.createElement("ul", null, month.events.map(function (event, i) {
    return React.createElement(Event, Object.assign({
      key: i
    }, event));
  })));
};

Month.defaultProps = {
  additionalClasses: defaults.additionalClasses.value
};
export default Month;