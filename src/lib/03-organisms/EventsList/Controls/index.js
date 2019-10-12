/**
 * CONTROLS
 * 
 * Controls components are to be nested in an Events List organism.
 * They receive a subset of the Events List's data - an array of month 
 * names, which are rendered in the controls <p> tag.
 * 
 */

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const Controls = ({
    additionalClasses,
    months,
    setMonthIndex
}) => {
    const [activeMonth, setActiveMonth] = useState(months[0])

    useEffect(() => {
        const handleClick = e => {
            const currentIndex = months.indexOf(activeMonth)
            if (e.target.className === 'right-arrow' && currentIndex !== months.length - 1) {
                let index = currentIndex + 1
                setActiveMonth(months[index])
                setMonthIndex(index)
            }
            else if (e.target.className === 'right-arrow' && currentIndex === months.length - 1) {
                let index = 0
                setActiveMonth(months[index])
                setMonthIndex(index)
            }
            else if (e.target.className === 'left-arrow' && currentIndex !== 0) {
                let index = currentIndex - 1
                setActiveMonth(months[index])
                setMonthIndex(index)
            }
            else if (e.target.className === 'left-arrow' && currentIndex === 0) {
                let index = months.length - 1
                setActiveMonth(months[index])
                setMonthIndex(index)
            }
        }

        const leftArrow = document.querySelector('.left-arrow')
        const rightArrow = document.querySelector('.right-arrow')
        if (leftArrow !== null && rightArrow !== null) {
            leftArrow.addEventListener('click', handleClick)
            rightArrow.addEventListener('click', handleClick)
        }
    }, [activeMonth, months, setMonthIndex])

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
    months: PropTypes.array.isRequired,
    setMonthIndex: PropTypes.func.isRequired
}

Controls.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default Controls