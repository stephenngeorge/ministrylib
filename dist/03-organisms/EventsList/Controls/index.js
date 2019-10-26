import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * CONTROLS
 * 
 * Controls components are to be nested in an Events List organism.
 * They receive a subset of the Events List's data - an array of month 
 * names, which are rendered in the controls <p> tag.
 * 
 */
import React, { useEffect, useState } from 'react';
import defaults from './defaults';

var Controls = function Controls(_ref) {
  var additionalClasses = _ref.additionalClasses,
      months = _ref.months,
      setMonthIndex = _ref.setMonthIndex;

  var _useState = useState(months[0]),
      _useState2 = _slicedToArray(_useState, 2),
      activeMonth = _useState2[0],
      setActiveMonth = _useState2[1];

  useEffect(function () {
    var handleClick = function handleClick(e) {
      var currentIndex = months.indexOf(activeMonth);

      if (e.target.className === 'right-arrow' && currentIndex !== months.length - 1) {
        var index = currentIndex + 1;
        setActiveMonth(months[index]);
        setMonthIndex(index);
      } else if (e.target.className === 'right-arrow' && currentIndex === months.length - 1) {
        var _index = 0;
        setActiveMonth(months[_index]);
        setMonthIndex(_index);
      } else if (e.target.className === 'left-arrow' && currentIndex !== 0) {
        var _index2 = currentIndex - 1;

        setActiveMonth(months[_index2]);
        setMonthIndex(_index2);
      } else if (e.target.className === 'left-arrow' && currentIndex === 0) {
        var _index3 = months.length - 1;

        setActiveMonth(months[_index3]);
        setMonthIndex(_index3);
      }
    };

    var leftArrow = document.querySelector('.left-arrow');
    var rightArrow = document.querySelector('.right-arrow');

    if (leftArrow !== null && rightArrow !== null) {
      leftArrow.addEventListener('click', handleClick);
      rightArrow.addEventListener('click', handleClick);
    }
  }, [activeMonth, months, setMonthIndex]);
  return React.createElement("div", {
    className: "event-list__controls ".concat(additionalClasses.join(" "))
  }, React.createElement("div", {
    className: "left-arrow"
  }), React.createElement("p", {
    className: "event-list__controls--month"
  }, activeMonth), React.createElement("div", {
    className: "right-arrow"
  }));
};

Controls.defaultProps = {
  additionalClasses: defaults.additionalClasses.value
};
export default Controls;