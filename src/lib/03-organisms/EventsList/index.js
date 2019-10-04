import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import Controls from './Controls'
import { Title } from '../../01-atoms'
import { Event } from '../../02-molecules'

const EventsList = ({
    additionalClasses,
    data
}) => {
    return (
        <div className={`events-list ${additionalClasses.join(" ")}`}>
            <Title headingLevel={2} headingText="Upcoming Events" />
            <Controls months={ data.map(event => event.month) } />
        </div>
    )
}

EventsList.propTypes = {
    additionalClasses: PropTypes.array,
    data: PropTypes.array.isRequired
}

EventsList.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default EventsList