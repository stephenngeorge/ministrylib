/**
 * IMAGE
 * 
 * Image components render an image wthin a container
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import ContentBox from '../ContentBox'

const Image = ({
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

Image.propTypes = {
    additionalClasses: PropTypes.array,
    altText: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
}

Image.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    altText: defaults.altText.value,
}

export default Image