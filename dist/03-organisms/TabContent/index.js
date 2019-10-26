import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * TABCONTENT
 * 
 * Tab Content components are used to display an array of information where 
 * each "chunk" of information is stored under a "tab". It renders a Tabs component 
 * (a list of tabs that determines the content) and a Content component that is passed 
 * a particular tab from the array.
 * An array of 'tabs' must be provided, data should be structured:
 * [
 * ..{
 * ....class: "green",
 * ....key: "1" | 1,
 * ....tabText: "Tab 1",
 * ....tabContent: {
 * ......leadParagraph: "lorem ipsum",
 * ......supportingParagraph: "lorem ipsum"
 * ....}
 * ..}
 * ]
 * 
 */
import React, { useState } from 'react';
import defaults from './defaults';
import Tabs from './Tabs';
import Content from './Content';

var TabContent = function TabContent(_ref) {
  var additionalClasses = _ref.additionalClasses,
      tabs = _ref.tabs;

  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  return React.createElement("section", {
    className: "tab-content ".concat(additionalClasses.join(" "))
  }, React.createElement(Tabs, {
    setActiveTab: setActiveTab,
    tabs: tabs
  }), React.createElement(Content, {
    activeTab: tabs[tabs.map(function (tab) {
      return tab.key;
    }).indexOf(activeTab)]
  }));
};

TabContent.defaultProps = {
  additionalClasses: defaults.additionalClasses.value
};
export default TabContent;