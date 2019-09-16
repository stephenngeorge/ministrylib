import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const Column = ({ additionalClasses, children, span }) => {
    // warn about defaults
    if (defaults.span.range.indexOf(span) < 0) console.warn(defaults.span.warning)

    return (
        <div className={`column grid-span-${span} ${additionalClasses.join(' ')}`}>
            { children }
        </div>
    )
}

Column.propTypes = {
    additionalClasses: PropTypes.array,
    span: PropTypes.number
}

Column.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    span: defaults.span.value
}

export default Column