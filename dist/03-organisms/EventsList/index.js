import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * EVENTLIST
 * 
 * Event List components display a block of controls (left, right arrows and 
 * the month name) with a <Month /> components beneath.
 * 
 * Event List recieves data, which should be structured:
 * [
 * ..{
 * ....month<string>: 'January',
 * ....events<array>: [
 * ......{
 * ........date<number>: 1,
 * ........type<string>: "Event Category",
 * ........location<string>: "String with whatever information is available",
 * ........bookable<boolean>: true, [optional]
 * ........bookingUrl<string>: "valid url" [optional]
 * ......}
 * ....]
 * ..}
 * ]
 * 
 */
import React, { useState } from 'react';
import defaults from './defaults';
import Controls from './Controls';
import Month from './Month';
import { Title } from '../../01-atoms';

var EventsList = function EventsList(_ref) {
  var additionalClasses = _ref.additionalClasses,
      data = _ref.data;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      monthIndex = _useState2[0],
      setMonthIndex = _useState2[1];

  return React.createElement("section", {
    className: "events-list ".concat(additionalClasses.join(" "))
  }, React.createElement(Title, {
    headingLevel: 2,
    headingText: "Upcoming Events"
  }), React.createElement(Controls, {
    months: data.map(function (event) {
      return event.month;
    }),
    setMonthIndex: setMonthIndex
  }), React.createElement(Month, {
    month: data[monthIndex]
  }));
};

EventsList.defaultProps = {
  additionalClasses: defaults.additionalClasses.value
};
export default EventsList;