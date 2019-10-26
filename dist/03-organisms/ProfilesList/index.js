/**
 * PROFILE LIST
 * 
 * Profile List components are presentational components designed 
 * to display a list of Profile molecules.
 * 
 * Profile List components accept an array of Profiles, the data for which 
 * should be structured as follows:
 * [
 * ..{
 * ....name: string,
 * ....description: string,
 * ....imageUrl: string
 * ..}
 * ]
 * 
*/
import React from 'react';
import defaults from './defaults';
import { Profile } from '../../02-molecules';

var ProfilesList = function ProfilesList(_ref) {
  var additionalClasses = _ref.additionalClasses,
      profiles = _ref.profiles;
  return React.createElement("ul", {
    className: "profiles-list ".concat(additionalClasses.join(" "))
  }, profiles.map(function (profile, i) {
    return React.createElement("li", {
      key: i
    }, React.createElement(Profile, {
      profile: profile
    }));
  }));
};

ProfilesList.defaultProps = {
  additionalClasses: defaults.additionalClasses.value
};
export default ProfilesList;