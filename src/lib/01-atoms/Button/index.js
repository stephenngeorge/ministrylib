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
import { Link } from 'react-router-dom'

import defaults from './defaults'

const Button = ({
    additionalClasses,
    buttonBlock,
    buttonColor,
    buttonElement,
    buttonId,
    buttonLink,
    buttonLinkType,
    buttonOnClick,
    buttonOutline,
    buttonSize,
    buttonText
}) => {
    // warn about invalid props values
    if (defaults.buttonSize.range.indexOf(buttonSize.toLowerCase().trim()) < 0) {
        console.warn(defaults.buttonSize.warning)
    }
    if (defaults.buttonColor.range.indexOf(buttonColor.toLowerCase().trim()) < 0) {
        console.warn(defaults.buttonColor.warning)
    }
    if (defaults.buttonOutline.range.indexOf(buttonOutline) < 0) {
        console.warn(defaults.buttonOutline.warning)
    }
    if (defaults.buttonLinkType.range.indexOf(buttonLinkType) < 0) {
        console.warn(defaults.buttonLinkType.warning)
    }

    // set button classes based on props
    const buttonClasses = {
        baseClasses: `button ${additionalClasses.join(' ')} `,
        buttonColor: `button--color-${buttonColor} `,
        buttonSize: `button--size-${buttonSize} `
    }
    if (!!buttonBlock) buttonClasses.buttonBlock = 'button--block '
    if (!!buttonOutline) buttonClasses.buttonOutline = `button-outline--color-${buttonOutline}`
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
        href: buttonLinkType === 'external' ? link : null,
        onClick: handleClick
    }

    const HTMLTag = buttonElement.trim()
    if (HTMLTag === "a" && buttonLinkType === 'internal') {
        return (
            <Link className={classes} {...attribs} to={buttonLink}>
                { buttonText }
            </Link>
        )
    }
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
    buttonLinkType: PropTypes.string,
    buttonOnClick: PropTypes.func,
    buttonOutline: PropTypes.string,
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
    buttonLinkType: defaults.buttonLinkType.value,
    buttonOnClick: defaults.buttonOnClick.value,
    buttonOutline: defaults.buttonOutline.value,
    buttonSize: defaults.buttonSize.value
}

export default Button