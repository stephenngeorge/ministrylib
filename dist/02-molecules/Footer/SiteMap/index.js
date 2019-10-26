/**
 * SITEMAP
 * 
 * Sitemap is a simple collection of links to be dispalyed in the footer
 * 
 */
import React from 'react';
import { Link } from 'react-router-dom';

var SiteMap = function SiteMap(_ref) {
  var links = _ref.links;
  return React.createElement("div", {
    className: "site-map"
  }, React.createElement("p", null, "Site Map"), React.createElement("ul", null, React.createElement("li", null, React.createElement(Link, {
    to: "/"
  }, "Home")), links.map(function (link, i) {
    return React.createElement("li", {
      key: i
    }, React.createElement(Link, {
      to: link.url
    }, link.text));
  })));
};

export default SiteMap;