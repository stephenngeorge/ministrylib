/**
 * MONTH
 * 
 * Month components are to be nested inside an Event List organism.
 * It receives a subset of the Event List's data - a specific object from 
 * the array. It then renders an <Event /> component for each item in that 
 * data's .events array.
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { Event } from '../../../02-molecules'

const Month = ({
    additionalClasses,
    month
}) => {
    return (
        <div className={`month ${additionalClasses.join(" ")}`}>
            <ul>
                {
                    month.events.map((event, i) => {
                        return <Event key={i} {...event} />
                    })
                }
            </ul>
        </div>
    )
}

Month.propTypes = {
    additionalClasses: PropTypes.array,
    month: PropTypes.object.isRequired
}

Month.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default Month