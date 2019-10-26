/**
 * TEXTLINK
 * 
 * TextLink components display an anchor tag and render either 
 * a <Link> (from the react-router-dom library) or a regular 
 * <a> depending on whether an internal or external resources 
 * is referenced.
 * 
 */

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import defaults from './defaults'

const TextLink = ({
    additionalClasses,
    linkText,
    linkUrl,
    variation
}) => {
    // warn about defaults
    if (defaults.variation.range.indexOf(variation) < 0) console.warn(defaults.variation.warning)

    const internalLink = linkText.length > 0 && linkUrl.length > 0 ? (
        <Link to={linkUrl} className={ `text-link ${additionalClasses.join(' ')}` }>
            { linkText }
        </Link>
    ) : null

    const externalLink = linkText.length > 0 && linkUrl.length > 0 ? (
        <a href={linkUrl} className={ `text-link ${additionalClasses.join(' ')}` }>
            { linkText }
        </a>
    ) : null

    return variation === 'internal' ? internalLink : externalLink
}

TextLink.propTypes = {
    additionalClasses: PropTypes.array,
    linkText: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
    variation: PropTypes.string
}

TextLink.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    variation: defaults.variation.value
}

export default TextLink