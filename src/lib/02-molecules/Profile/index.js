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
 * ..imageUrl: string,
 * ..testimonialText: string
 * }
 * 
*/

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { PlainText, Title } from '../../01-atoms'

const Profile = ({
    additionalClasses,
    profile
}) => {
    return (
        <div className={`profile ${additionalClasses.join(" ")} text-container--very-narrow`}>
            <img src={ profile.imageUrl } alt={ profile.name } />
            <div className="profile__text-content">
                <Title  additionalClasses={['color--complementary']}
                        headingLevel={ 3 }
                        headingText={ profile.name }
                />
                <PlainText  additionalClasses={['color--dark']}
                            text={ profile.description }
                />
                {
                  profile.testimonialText &&
                  <p className="font-family--cursive endorsement">{ profile.testimonialText }</p>
                }
            </div>
        </div>
    )
}

Profile.propTypes = {
    additionalClasses: PropTypes.array,
    profile: PropTypes.object.isRequired
}

Profile.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default Profile