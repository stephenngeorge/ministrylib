/**
 * COVER IMAGE
 * 
 * CoverImage component displays an image from a given source
 * in a container div. It is full-width and uses object-fit
 * to ensure that the image always fills the container
 * 
 * @todo install and import object-fit polyfill
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import ContentBox from '../ContentBox'

const CoverImage = ({
    additionalClasses,
    altText,
    imageUrl
}) => {
    // warn about defaults
    if (altText === defaults.altText.value) console.warn(defaults.altText.warning)
    return imageUrl.length > 0 && imageUrl !== null && imageUrl !== undefined ? (
        <div className={`image ${additionalClasses.join(' ')}`}>
          <ContentBox>
            <div className="text-container--very-narrow">
              <img    src={ imageUrl }
                      alt={ altText }
              />
            </div>
          </ContentBox>
        </div>
    ) : null
}

CoverImage.propTypes = {
    additionalClasses: PropTypes.array,
    altText: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
}

CoverImage.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    altText: defaults.altText.value,
}

export default CoverImage