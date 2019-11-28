/**
 * TESTIMONIAL
 * 
 * Testimonial components are used to display a quotation that 
 * describes the product. Text is cursive with an optional source 
 * that displays in the sans-serif font.
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { ContentBox, PlainText } from '../../01-atoms'

const Testimonial = ({
    additionalClasses,
    source,
    testimonialText
}) => {
    return (
        <section className={`testimonial container--full-width ${additionalClasses.join(" ")}`}>
            <ContentBox>
                <PlainText  additionalClasses={['font-family--cursive', 'container', 'no-padding']}
                            text={ testimonialText }
                />
                <PlainText  additionalClasses={['source-text', 'container', 'no-padding', 'color--dark']}
                            text={ source }
                />
            </ContentBox>
        </section>
    )
}

Testimonial.propTypes = {
    additionalClasses: PropTypes.array,
    source: PropTypes.string,
    testimonialText: PropTypes.string.isRequired
}

Testimonial.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    source: defaults.source.value
}

export default Testimonial