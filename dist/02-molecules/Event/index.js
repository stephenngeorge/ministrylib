/**
 * EVENT
 * 
 * Event components are primarily designed to be nested inside 
 * an EventsList component (see '03-organisms/EventsList').
 * It displays a number (representing the date) next to some basic 
 * event information. The bookable URL should point to a third party 
 * event booking/organising platform (eventbrite, facebook)
 * 
 */
import React from 'react';
import defaults from './defaults';

var Event = function Event(_ref) {
  var additionalClasses = _ref.additionalClasses,
      bookable = _ref.bookable,
      bookingUrl = _ref.bookingUrl,
      date = _ref.date,
      location = _ref.location,
      type = _ref.type;
  // warn about defaults
  if (!!bookable && bookingUrl.length <= 0) console.warn(defaults.bookingUrl.warning);
  return React.createElement("div", {
    className: "event ".concat(additionalClasses.join(" "))
  }, React.createElement("div", {
    className: "event__date"
  }, React.createElement("p", null, date)), React.createElement("div", {
    className: "event__text-content"
  }, React.createElement("p", {
    className: "event__text-content--event-type"
  }, type), React.createElement("p", {
    className: "event__text-content--location"
  }, location), !!bookable && React.createElement("a", {
    href: bookingUrl
  }, "Book online")));
};

Event.defaultProps = {
  additionalClasses: defaults.additionalClasses.value,
  bookable: defaults.bookable.value,
  bookingUrl: defaults.bookingUrl.value
};
export default Event;