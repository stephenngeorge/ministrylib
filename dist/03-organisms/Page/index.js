/**
 * PAGE
 * 
 * Page component is a layout component that wraps all the pages 
 * of the website, it comprises the MainNav and the Footer molecules
 * 
*/
import React from 'react';
import { Footer, MainNav } from '../../02-molecules';

var Page = function Page(_ref) {
  var children = _ref.children,
      footerAffiliation = _ref.footerAffiliation,
      footerAffiliationUrl = _ref.footerAffiliationUrl,
      navLinks = _ref.navLinks,
      navLogo = _ref.navLogo;
  return React.createElement("div", {
    className: "page"
  }, React.createElement(MainNav, {
    siteLogo: navLogo,
    menuItems: navLinks
  }), children, React.createElement(Footer, {
    affiliation: footerAffiliation,
    affiliationUrl: footerAffiliationUrl,
    siteMapLinks: navLinks
  }));
};

export default Page;