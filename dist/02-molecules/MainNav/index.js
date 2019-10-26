/**
 * MAIN NAV
 * 
 * MainNav component is the main site navigation for use at the top 
 * of every page. It receives an array of menuItems, the data for which 
 * should be structured as follows:
 * 
 * [
 * ..{
 * ....url: String, path to the target page,
 * ....text: String, the text to be clicked on
 * ..}
 * ]
 * 
*/
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

var MainNav = function MainNav(_ref) {
  var menuItems = _ref.menuItems,
      siteLogo = _ref.siteLogo;
  // ANIMATE NAV BAR ON MENU ICON CLICK (small breakpoints)
  useEffect(function () {
    var menuIcon = document.querySelector('.main-nav__menu-icon');
    var navMenu = document.querySelector('.main-nav__menu');

    var toggleNav = function toggleNav() {
      navMenu.classList.toggle('in-view');
      menuIcon.classList.toggle('icon-transform');
    };

    if (menuIcon !== null && menuIcon !== undefined && navMenu !== null && navMenu !== undefined) {
      menuIcon.addEventListener('click', toggleNav);
    }

    return function () {
      return menuIcon.removeEventListener('click', toggleNav);
    };
  }, []);
  return React.createElement("nav", {
    className: "main-nav"
  }, React.createElement("div", {
    className: "main-nav__icons"
  }, React.createElement("div", {
    className: "main-nav__site-logo"
  }, !!siteLogo && React.createElement(Link, {
    to: "/"
  }, React.createElement("img", {
    alt: "esther ministry logo",
    src: siteLogo
  }))), React.createElement("div", {
    className: "main-nav__menu-icon"
  }, React.createElement("div", {
    className: "main-nav__menu-icon--bar"
  }), React.createElement("div", {
    className: "main-nav__menu-icon--bar"
  }))), React.createElement("ul", {
    className: "main-nav__menu"
  }, menuItems.length > 0 && menuItems.map(function (item, i) {
    return React.createElement("li", {
      key: i,
      className: "main-nav__menu--item"
    }, React.createElement(Link, {
      to: item.url
    }, item.text));
  })));
};

export default MainNav;