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

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { ContentBox } from '../../01-atoms'
import { Profile } from '../../02-molecules'

const ProfilesList = ({
    additionalClasses,
    profiles
}) => {
    return (
        <ContentBox>
            <ul className={`profiles-list ${additionalClasses.join(" ")}`}>
                {
                    profiles.map((profile, i) => (
                        <li key={ i }>
                            <Profile profile={ profile } />
                        </li>
                    ))
                }
            </ul>
        </ContentBox>
    )
}

ProfilesList.propTypes = {
    additionalClasses: PropTypes.array,
    profiles: PropTypes.array.isRequired
}

ProfilesList.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default ProfilesList