/**
 * HERO TEXT
 * 
 * HeroText component displays a heading with supporting 
 * text. Comprises <Title /> and <PlainText /> components 
 * which can be found in the 'atoms' directory
 * 
*/

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { Title, PlainText } from '../../01-atoms'

const HeroText = ({
    additionalClasses,
    bodyText,
    headingText,
    variation
}) => {
    // warn about defaults
    if (defaults.variation.range.indexOf(variation) < 0) console.warn(defaults.variation.warning)
    return (
        <div className={`hero-textBlock ${additionalClasses.join(' ')}`}>
            <div class="content">
                <Title  headingLevel={ 1 }
                        headingText={ headingText }
                        additionalClasses={['text--site-title', 'font-weight--light']}
                />
                <PlainText text={ bodyText } />
            </div>
        </div>
    )
}

HeroText.propTypes = {
    additionalClasses: PropTypes.array,
    bodyText: PropTypes.string.isRequired,
    headingText: PropTypes.string,
    variation: PropTypes.string
}

HeroText.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    headingText: defaults.headingText.value,
    variation: defaults.variation.value
}

export default HeroText