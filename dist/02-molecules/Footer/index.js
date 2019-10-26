/**
 * FOOTER
 * 
 * Footer component is rendered in the Page layout component and 
 * therefore appears at the bottom of the page. Extra child components 
 * could be added here as the project grows. Footer currently displays 
 * a link the affiliated charity and a basic site map.
 * 
 */
import React from 'react';
import { Link } from 'react-router-dom';
import SiteMap from './SiteMap';

var Footer = function Footer(_ref) {
  var affiliation = _ref.affiliation,
      affiliationUrl = _ref.affiliationUrl,
      siteMapLinks = _ref.siteMapLinks;
  return React.createElement("footer", {
    className: "footer container--full-width"
  }, React.createElement("div", {
    className: "footer__affiliation"
  }, React.createElement("p", null, "Esther Ministry is proud to support the"), React.createElement(Link, {
    to: affiliationUrl
  }, affiliation)), React.createElement(SiteMap, {
    links: siteMapLinks
  }));
};

export default Footer;