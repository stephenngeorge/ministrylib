/**
 * IMAGE BLOCK
 * 
 * Image Block components are used to display an image with 
 * supporting text to the side. On smaller breakpoints, the 
 * layout collapses to a vertical stack.
 * 
 * @todo provide option for rendereing image on left or right
 * 
 */

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
        /**
         * positionText moves all of the text content up by half the title height on small breakpoints 
         * so that the title overlaps the image
         */
        const positionText = () => {
            const textBlock = document.querySelector('.image-block__text-content')

            if (textBlock !== null && textBlock !== undefined) {
              if (window.innerWidth < 992) {
                  const title = document.querySelector('#that-esther-moment')
                  if (title !== null && title !== undefined) {
                      const titleHeight = Math.floor(title.offsetHeight)
                      const yOffset = Math.ceil(-titleHeight / 2)
          
                      textBlock.style.marginTop = `${yOffset}px`
                  }
              }
              else {
                  textBlock.style.marginTop = '0px'
              }
            }
        }
        /**
         * setImageHeight establish the height of the image, based on the height of the text content
         */
        const setImageHeight = () => {
            const imageContent = document.querySelector('.image-block__image-content')
            const textBlock = document.querySelector('.image-block__text-content')

            if (imageContent !== null && imageContent !== undefined && textBlock !== null && textBlock !== undefined) {
              if (window.innerWidth >= 992) {
                  imageContent.style.height = `${textBlock.offsetHeight}px`
              }
              else {
                  imageContent.style.height = '18rem'
              }
            }
        }

        const manipulateDOM = () => {
            positionText()
            setImageHeight()
        }

        manipulateDOM()
        window.addEventListener('resize', manipulateDOM)

        return () => document.removeEventListener('resize', manipulateDOM)
    }, [])

    return (
        <section className={`image-block ${additionalClasses.join(" ")}`}>
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
        </section>
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