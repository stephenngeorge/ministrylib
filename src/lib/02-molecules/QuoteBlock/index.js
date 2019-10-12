import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { PlainText } from '../../01-atoms'

const QuoteBlock = ({
    additionalClasses,
    quoteText
}) => {
    return (
        <div className={`quote-block container ${additionalClasses.join(" ")}`}>
            <PlainText  additionalClasses={['font-family--cursive']}
                        text={quoteText}
            />
        </div>
    )
}

QuoteBlock.propTypes = {
    additionalClasses: PropTypes.array,
    quoteText: PropTypes.string.isRequired
}

QuoteBlock.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default QuoteBlock