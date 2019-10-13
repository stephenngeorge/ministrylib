/**
 * HIGHLIGHTS
 * 
 * Highlights components display an array of strings displayed 
 * in a cursive font and an accent colour
 * 
*/

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const Highlights = ({
    additionalClasses,
    textBlocks
}) => {
    return (
        <div className={`highlights ${additionalClasses.join(" ")}`}>
            <ul>
                {
                    textBlocks.map((block, i) => {
                        return <li key={ i }>{ block }</li>
                    })
                }
            </ul>
        </div>
    )
}

Highlights.propTypes = {
    additionalClasses: PropTypes.array,
    textBlocks: PropTypes.array.isRequired
}

Highlights.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default Highlights