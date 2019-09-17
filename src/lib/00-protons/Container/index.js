import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const Container = ({
    additionalClasses,
    backgroundColor,
    children,
    padding,
    fullWidth
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
    containerClasses.fullWidth = !!fullWidth ? 'container--full-width ' : 'container '
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
    fullWidth: PropTypes.bool
}

Container.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    backgroundColor: defaults.backgroundColor.value,
    padding: defaults.padding.value,
    fullWidth: defaults.fullWidth.value
}

export default Container