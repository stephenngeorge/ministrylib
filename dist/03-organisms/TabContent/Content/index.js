/**
 * CONTENT
 * 
 * Content component is to be used in the TabContent component. It renders 
 * the content of a particular piece of tabulated content. Which tab and tab-content 
 * is rendered is controlled by the Tabs components (../Tabs)
 * 
 */
import React from 'react';
import defaults from './defaults';
import { PlainText } from '../../../01-atoms';

var Content = function Content(_ref) {
  var activeTab = _ref.activeTab,
      additionalClasses = _ref.additionalClasses;
  return React.createElement("div", {
    className: "tab-contents ".concat(additionalClasses.join(" "), " bg--").concat(activeTab.color)
  }, React.createElement(PlainText, {
    additionalClasses: ['tab-contents__lead-paragraph'],
    text: activeTab.tabContent.leadParagraph
  }), React.createElement(PlainText, {
    additionalClasses: ['tab-contents__supporting-paragraph'],
    text: activeTab.tabContent.supportingParagraph
  }));
};

Content.defaultProps = {
  additionalClasses: defaults.additionalClasses.value
};
export default Content;