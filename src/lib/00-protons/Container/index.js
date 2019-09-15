import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import './container.scss'

const Container = ({
    additionalClasses,
    backgroundColor,
    children,
    padding,
    full_width
}) => {
    // warn about defaults
    if (defaults.backgroundColor.range.indexOf(backgroundColor) < 0) {
        console.warn(defaults.backgroundColor.warning)   
    }

    // set classes based on props
    const containerClasses = {
        baseClasses: additionalClasses.join(' '),
        bgColor: `bg--${backgroundColor} `
    }
    if (!padding) containerClasses.padding = 'no-padding-x '
    containerClasses.full_width = !!full_width ? 'container--full-width ' : 'container '
    // manipulate containerClasses object into one string
    // that can be set as container.className
    let classes = ''
    Object.keys(containerClasses).forEach(key => {
        classes += containerClasses[key]
    })

    return (
        <div className={classes}>
            { children }
        </div>
    )
}

Container.propTypes = {
    additionalClasses: PropTypes.array,
    backgroundColor: PropTypes.string,
    padding: PropTypes.bool,
    full_width: PropTypes.bool
}

Container.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    backgroundColor: defaults.backgroundColor.value,
    padding: defaults.padding.value,
    full_width: defaults.full_width.value
}

export default Container