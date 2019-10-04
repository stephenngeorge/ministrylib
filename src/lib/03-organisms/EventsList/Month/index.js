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
                    month.events.map(event => {
                        return <Event {...event} />
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