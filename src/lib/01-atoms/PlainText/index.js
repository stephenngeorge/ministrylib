/**
 * PLAIN TEXT
 * 
 * PlainText component displays a simple paragraph 
 * of text.
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const PlainText = ({
    additionalClasses,
    paragraphId,
    text
}) => {
    return text.length > 0 && text !== null && text !== undefined ? (
        <p  className={`plain-text ${additionalClasses.join(' ')}`}
            id={ paragraphId }
        >
            { text }
        </p>
    ) : null
}

PlainText.propTypes = {
    additionalClasses: PropTypes.array,
    paragraphId: PropTypes.string,
    text: PropTypes.string.isRequired
}

PlainText.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    paragraphId: defaults.paragraphId.value
}

export default PlainText