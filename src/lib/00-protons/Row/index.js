import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const Row = ({additionalClasses, children, span}) => {
    // warn about defaults
    if (defaults.span.range.indexOf(span) < 0) console.warn(defaults.span.warning)

    return (
        <div className={`row grid-span-${span} ${additionalClasses.join(' ')}`}>
            {children}
        </div>
    )
}

Row.propTypes = {
    additionalClasses: PropTypes.array,
    span: PropTypes.number
}

Row.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    span: defaults.span.value
}

export default Row