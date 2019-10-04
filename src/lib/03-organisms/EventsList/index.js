import React, { useState } from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import Controls from './Controls'
import Month from './Month'
import { Title } from '../../01-atoms'

const EventsList = ({
    additionalClasses,
    data
}) => {
    const [monthIndex, setMonthIndex] = useState(0)
    return (
        <div className={`events-list ${additionalClasses.join(" ")}`}>
            <Title headingLevel={2} headingText="Upcoming Events" />
            <Controls months={ data.map(event => event.month) } setMonthIndex={setMonthIndex} />
            <Month month={data[monthIndex]} />
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