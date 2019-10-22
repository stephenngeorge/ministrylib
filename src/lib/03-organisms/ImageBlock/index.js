import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { CoverImage, Title, PlainText } from '../../01-atoms'

const ImageBlock = ({
    additionalClasses,
    headingText,
    imageAltText,
    imageUrl,
    leadText,
    supportingText
}) => {
    useEffect(() => {
        const positionText = () => {
            const textBlock = document.querySelector('.image-block__text-content')

            if (window.innerWidth < 992) {
                const titleHeight = Math.floor(document.querySelector('#that-esther-moment').offsetHeight)
                const yOffset = Math.ceil(-titleHeight / 2)
    
                textBlock.style.marginTop = `${yOffset}px`
            }
            else {
                textBlock.style.marginTop = '0px'
            }
        }
        positionText()
        window.addEventListener('resize', positionText)

        return () => document.removeEventListener('resize', positionText)
    }, [])

    return (
        <div className={`image-block ${additionalClasses.join(" ")}`}>
            <div className="image-block__image-content">
                <CoverImage     altText={ imageAltText }
                                imageUrl={ imageUrl }
                />
            </div>

            <div className="image-block__text-content">
                <Title  headingLevel={ 2 }
                        headingText={ headingText }
                        headingId="that-esther-moment"
                        additionalClasses={['title__padded-text--main']}
                />
                <PlainText  additionalClasses={['text--lead', 'font-weight--light']}
                            text={ leadText }
                            paragraphId="image-block--lead-text"
                />
                <PlainText  additionalClasses={['font-weight--light']}
                            text={ supportingText }
                            paragraphId="image-block--supporting-text"
                />
            </div>
        </div>
    )
}

ImageBlock.propTypes = {
    additionalClasses: PropTypes.array,
    headingText: PropTypes.string,
    imageAltText: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    leadText: PropTypes.string.isRequired,
    supportingText: PropTypes.string
}

ImageBlock.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    supportingText: defaults.supportingText.value
}

export default ImageBlock