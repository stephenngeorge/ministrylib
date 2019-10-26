/**
 * PROFILE
 * 
 * Profile components are mainly intended to be used within the 
 * ProfilesList organism, however they could be used in isolation.
 * 
 * Profile components accept a profile prop, which is an object that 
 * should be structured as follows:
 * 
 * {
 * ..name: string,
 * ..description: string,
 * ..imageUrl: string
 * }
 * 
*/
import React from 'react';
import defaults from './defaults';
import { PlainText, Title } from '../../01-atoms';

var Profile = function Profile(_ref) {
  var additionalClasses = _ref.additionalClasses,
      profile = _ref.profile;
  return React.createElement("div", {
    className: "profile ".concat(additionalClasses.join(" "), " text-container--very-narrow")
  }, React.createElement("img", {
    src: profile.imageUrl,
    alt: profile.name
  }), React.createElement("div", {
    className: "profile__text-content"
  }, React.createElement(Title, {
    additionalClasses: ['color--complementary'],
    headingLevel: 3,
    headingText: profile.name
  }), React.createElement(PlainText, {
    additionalClasses: ['color--dark'],
    text: profile.description
  })));
};

Profile.defaultProps = {
  additionalClasses: defaults.additionalClasses.value
};
export default Profile;