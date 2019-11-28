/**
 * CONTENT BOX
 * 
 * A Content Box is a layout component that wraps other content 
 * on the site. It restricts the width of the content to the max-width 
 * of the site (i.e. the largest breakpoint).
 * 
 * Content is optionally centred in one of three ways:
 * - margin: for most use cases, applies margin-left auto and margin-right auto
 *   to the container
 * - flex: if you know the Content Box is a flex item of a parent flex container 
 *   with a flex-direction: column, this option will apply align-self: center
 * - position: if the parent is position: relative, the Content Box will position: 
 *   absolute and centred using left: 50% and translateX(-50%)
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const ContentBox = ({
    additionalClasses,
    centreWith,
    children
}) => {
    // warn about out of range values
    if (defaults.centreWith.range.indexOf(centreWith) < 0) {
        console.log(`value out of range, please pass "margin", "flex" or "position" to the "centreWith" prop of ContentBox`)
    }
    return (
        <div className={`content-box ${centreWith} ${additionalClasses.join(" ")}`}>
            { children }
        </div>
    )
}

ContentBox.propTypes = {
    additionalClasses: PropTypes.array,
    centreWith: PropTypes.string
}

ContentBox.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    centreWith: defaults.centreWith.value
}

export default ContentBox