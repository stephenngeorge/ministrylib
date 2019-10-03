import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const Event = ({
    additionalClasses,
    bookable,
    bookingUrl,
    date,
    location,
    type
}) => {
    // warn about defaults
    if (!!bookable && bookingUrl.length <= 0) console.warn(defaults.bookingUrl.warning)

    return (
        <div className={`event ${additionalClasses.join(" ")}`}>
            <div className="event__date">
                <p>{ date }</p>
            </div>
            <div className="event__text-content">
                <p className="event__text-content--event-type">{ type }</p>
                <p className="event__text-content--location">{ location }</p>
                {
                    !!bookable && <a href={bookingUrl}>Book online</a>
                }
            </div>
        </div>
    )
}

Event.propTypes = {
    additionalClasses: PropTypes.array,
    bookable: PropTypes.bool,
    bookingUrl: PropTypes.string,
    date: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

Event.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    bookable: defaults.bookable.value,
    bookingUrl: defaults.bookingUrl.value
}

export default Event