/**
 * CONTACT ICONS
 * 
 * ContactIcons components are used to display icons that 
 * link to different contact options like email and social 
 * media accounts.
 * ContactIcons take a contactMethods array which should be 
 * structured as follows:
 * 
 * [
 * ..{
 * ....contactName: string,
 * ....contactIcon: string,
 * ....contactUrl: string
 * ..}
 * ]
 * 
 */
import React from 'react';
import defaults from './defaults';

var ContactIcons = function ContactIcons(_ref) {
  var additionalClasses = _ref.additionalClasses,
      contactMethods = _ref.contactMethods;
  return React.createElement("section", {
    className: "contact-icons ".concat(additionalClasses.join(" "))
  }, React.createElement("ul", {
    className: "contact-icons__contact-methods"
  }, contactMethods.map(function (method) {
    return React.createElement("li", {
      key: method.contactName
    }, React.createElement("a", {
      href: method.contactUrl
    }, React.createElement("img", {
      src: method.contactIcon,
      alt: method.contactName
    })));
  })));
};

ContactIcons.defaultProps = {
  additionalClasses: defaults.additionalClasses.value
};
export default ContactIcons;