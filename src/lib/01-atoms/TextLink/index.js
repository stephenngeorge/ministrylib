import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const TextLink = ({
    linkText,
    linkUrl,
    variation
}) => {
    // warn about defaults
    if (defaults.variation.range.indexOf(variation) < 0) console.warn(defaults.variation.warning)

    // const internalLink = (

    // )

    const externalLink = (
        <a href={linkUrl}>{ linkText }</a>
    )
    return externalLink
}

TextLink.propTypes = {
    linkText: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
    variation: PropTypes.string
}

TextLink.defaultProps = {

}

export default TextLink