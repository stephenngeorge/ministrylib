/**
 * TABS
 * 
 * Tabs component is to be used in the TabContent component. It 
 * renders a list or "menu" of tabulated content and handles the 
 * active/inactive state of the tabs
 *  
 */
import React from 'react';
import defaults from './defaults';

var Tabs = function Tabs(_ref) {
  var additionalClasses = _ref.additionalClasses,
      setActiveTab = _ref.setActiveTab,
      tabs = _ref.tabs;
  return tabs.length > 0 ? React.createElement("ul", {
    className: "tabs ".concat(additionalClasses.join(" "))
  }, tabs.map(function (tab, i) {
    return React.createElement("li", {
      onClick: function onClick() {
        return setActiveTab(tab.key);
      },
      key: i,
      className: "bg--".concat(tab.color)
    }, tab.tabText);
  })) : null;
};

Tabs.defaultProps = {
  additionalClasses: defaults.additionalClasses.value
};
export default Tabs;