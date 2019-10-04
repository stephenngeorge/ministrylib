import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const Controls = ({
    additionalClasses,
    months
}) => {
    const [activeMonth, setActiveMonth] = useState(months[0])

    useEffect(() => {
        const handleClick = e => {
            const currentIndex = months.indexOf(activeMonth)
            if (e.target.className === 'right-arrow' && currentIndex !== months.length - 1) {
                setActiveMonth(months[currentIndex + 1])
            }
            else if (e.target.className === 'right-arrow' && currentIndex === months.length - 1) {
                setActiveMonth(months[0])
            }
            else if (e.target.className === 'left-arrow' && currentIndex !== 0) {
                setActiveMonth(months[currentIndex - 1])
            }
            else if (e.target.className === 'left-arrow' && currentIndex === 0) {
                setActiveMonth(months[months.length - 1])
            }
        }

        const leftArrow = document.querySelector('.left-arrow')
        const rightArrow = document.querySelector('.right-arrow')
        if (leftArrow !== null && rightArrow !== null) {
            leftArrow.addEventListener('click', handleClick)
            rightArrow.addEventListener('click', handleClick)
        }
    }, [activeMonth, months])

    return (
        <div className={`event-list__controls ${additionalClasses.join(" ")}`}>
            <div className="left-arrow"></div>
            <p className="event-list__controls--month">{ activeMonth }</p>
            <div className="right-arrow"></div>
        </div>
    )
}

Controls.propTypes = {
    additionalClasses: PropTypes.array,
    months: PropTypes.array.isRequired
}

Controls.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default Controls