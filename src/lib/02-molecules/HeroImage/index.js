/**
 * HERO IMAGE
 * 
 * HeroImage component displays a full-width image 
 * with configurable height and alt text
 * "Hero" images are designed to be used at the top of 
 * a page, but this component could theoretically be used 
 * in-page as well
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import './hero-image.scss'

import { CoverImage } from '../../00-atoms'

const HeroImage = ({
    additionalClasses,
    altText,
    divHeight,
    imageUrl
}) => {
    // warn about defaults
    if (divHeight === defaults.divHeight.value) console.warn(defaults.divHeight.warning)

    const divStyles = {
        height: `${ divHeight.toString() }vh`
    }

    return (
        <div    className={`hero-image ${additionalClasses.join(' ')}`}
                style={ divStyles }
        >
            <CoverImage altText={ altText }
                        imageUrl={ imageUrl }
            />
        </div>
    )
}

HeroImage.propTypes = {
    additionalClasses: PropTypes.array,
    altText: PropTypes.string,
    divHeight: PropTypes.number,
    imageUrl: PropTypes.string.isRequired
}

HeroImage.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    divHeight: defaults.divHeight.value
}

export default HeroImage