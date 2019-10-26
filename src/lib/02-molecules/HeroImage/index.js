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

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { CoverImage } from '../../01-atoms'

const HeroImage = ({
    additionalClasses,
    altText,
    animate,
    divHeight,
    imageUrl
}) => {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        if (animate === 'onScroll') {
            const animateImageScale = () => {
                const image = document.querySelector('#hero-image')
                // access the transform style of hero-image
                let scaler = (125 - scroll / 8) / 100
                let saturation = 100 - scroll
                
                if (scaler <= 1) scaler = 1
                if (scaler >= 1.25) scaler = 1.25

                image.style.transform = `scale(${scaler}, ${scaler})`
                image.style.filter = `saturate(${saturation}%)`
                setScroll(window.scrollY)
            }
            document.addEventListener('scroll', animateImageScale)
         
            return () => {
                document.removeEventListener('scroll', animateImageScale)
            }
        }
    }, [animate, scroll])

    // warn about defaults
    if (divHeight === defaults.divHeight.value) console.warn(defaults.divHeight.warning)
    if (defaults.animate.range.indexOf(animate) < 0) console.warn(defaults.animate.warning)

    const divStyles = {
        height: `${ divHeight.toString() }vh`
    }

    return (
        <div    className={`hero-image ${additionalClasses.join(' ')}`}
                style={ divStyles }
        >
            <CoverImage altText={ altText }
                        imageUrl={ imageUrl }
                        imageId="hero-image"
            />
        </div>
    )
}

HeroImage.propTypes = {
    additionalClasses: PropTypes.array,
    altText: PropTypes.string,
    animate: PropTypes.string,
    divHeight: PropTypes.number,
    imageUrl: PropTypes.string.isRequired
}

HeroImage.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    animate: defaults.animate.value,
    divHeight: defaults.divHeight.value
}

export default HeroImage