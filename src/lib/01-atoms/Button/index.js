/**
 * BUTTON
 * 
 * Button components can be many different 
 * elements but all will contain some text 
 * and have either a url to redirect to, or 
 * a click handler function
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import './button.scss'

const Button = ({
    additionalClasses,
    buttonBlock,
    buttonColor,
    buttonElement,
    buttonId,
    buttonLink,
    buttonOnClick,
    buttonOutline,
    buttonSize,
    buttonText
}) => {
    // warn about invalid props values
    if (defaults.buttonSize.range.indexOf(buttonSize.toLowerCase().trim()) < 0) {
        console.warn(defaults.buttonSize.warning)
    }
    // set button classes based on props
    const buttonClasses = {
        baseClasses: `button ${additionalClasses.join(' ')} `,
        buttonColor: `button--color-${buttonColor} `,
        buttonSize: `button--size-${buttonSize} `
    }
    if (!!buttonBlock) buttonClasses.buttonBlock = 'button--block '
    if (!!buttonOutline) buttonClasses.buttonOutline = `button-outline--color-${buttonColor}`
    // manipulate buttonClasses object into one string
    // that can be set as button.className
    let classes = ''
    Object.keys(buttonClasses).forEach(key => {
        classes += buttonClasses[key]
    })
    
    // define attributes, warn about incorrect props patterns
    let link, handleClick
    if (buttonElement === 'a') {
        if (buttonLink === null) console.warn(defaults.buttonLink.warning)
        link = buttonLink
    }
    if (buttonElement === 'button') {
        if (buttonOnClick === null) console.warn(defaults.buttonOnClick.warning)
        handleClick = buttonOnClick
    }
    // either href or onClick will be null, so react will not 
    // set that attribute
    const attribs = {
        id: buttonId.length > 0 ? buttonId : null,
        href: link,
        onClick: handleClick
    }

    const HTMLTag = buttonElement.trim()
    return (
        <HTMLTag {...attribs} className={classes}>
            { buttonText }
        </HTMLTag>
    )
}

Button.propTypes = {
    additionalClasses: PropTypes.array,
    buttonBlock: PropTypes.bool,
    buttonColor: PropTypes.string,
    buttonElement: PropTypes.string,
    buttonId: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonOnClick: PropTypes.func,
    buttonOutline: PropTypes.bool,
    buttonSize: PropTypes.string,
    buttonText: PropTypes.string.isRequired
}

Button.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    buttonBlock: defaults.buttonBlock.value,
    buttonColor: defaults.buttonColor.value,
    buttonElement: defaults.buttonElement.value,
    buttonId: defaults.buttonId.value,
    buttonLink: defaults.buttonLink.value,
    buttonOnClick: defaults.buttonOnClick.value,
    buttonOutline: defaults.buttonOutline.value,
    buttonSize: defaults.buttonSize.value
}

export default Button