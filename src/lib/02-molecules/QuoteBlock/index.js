/**
 * QUOTE BLOCK
 * 
 * Quote Blocks are used to display a quotation, in cursive text, 
 * overlaying an optional background image. If no image is provided, 
 * the background should default to the main theme colour.
 * Optionally, a source and citation for the quote can be displayed.
 * 
 * @todo set default background colour
 * 
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { CoverImage, PlainText, TextLink } from '../../01-atoms'

const QuoteBlock = ({
    additionalClasses,
    backgroundImage,
    citation,
    citationUrl,
    quoteText,
    source
}) => {
    useEffect(() => {
        const quoteBackground = document.querySelector('.quote-background')
        const textContent = document.querySelector('.quote-block__text-content')

        const setImageHeight = () => {
            if (window.innerWidth < 992) quoteBackground.style.height = `${textContent.offsetHeight + 96}px`
            if (window.innerWidth >= 992) quoteBackground.style.height = `${textContent.offsetHeight + 128}px`
        }

        setImageHeight()
        window.addEventListener('resize', setImageHeight)

        return () => {
            window.removeEventListener('resize', setImageHeight)
        }
    }, [])

    // warn about defaults
    if (citation.length > 0 && citationUrl.length <= 0) {
        console.warn(defaults.citationUrl.warning)
    }

    return (
        <section className={`quote-block ${additionalClasses.join(" ")}`}>
            <CoverImage     additionalClasses={['quote-background']}
                            altText="bible background"
                            imageUrl={ backgroundImage } />
            <div className="quote-block__text-content">
                <PlainText  additionalClasses={["font-family--cursive", "quote-text"]}
                            text={ quoteText }
                />
                <PlainText  additionalClasses={["source-text"]}
                            text={ source }
                />
                <TextLink   linkText={ citation }
                            linkUrl={ citationUrl }
                            variation="external"
                />
            </div>
        </section>
    )
}

QuoteBlock.propTypes = {
    additionalClasses: PropTypes.array,
    backgroundImage: PropTypes.string,
    citation: PropTypes.string,
    citationUrl: PropTypes.string,
    quoteText: PropTypes.string.isRequired,
    source: PropTypes.string
}

QuoteBlock.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    citation: defaults.citation.value,
    citationUrl: defaults.citationUrl.value,
    source: defaults.source.value
}

export default QuoteBlock