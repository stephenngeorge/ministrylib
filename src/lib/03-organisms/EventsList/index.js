import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { Event } from '../../02-molecules'

const EventsList = ({
    additionalClasses
}) => {
    return (
        <div className={`events-list ${additionalClasses.join(" ")}`}>
        </div>
    )
}

EventsList.propTypes = {
    additionalClasses: PropTypes.array
}

EventsList.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default EventsList