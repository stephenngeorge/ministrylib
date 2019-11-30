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

const CoverImage = ({
    additionalClasses,
    altText,
    imageId,
    imageUrl
}) => {
    // warn about defaults
    if (altText === defaults.altText.value) console.warn(defaults.altText.warning)
    return imageUrl.length > 0 && imageUrl !== null && imageUrl !== undefined ? (
        <div className={`cover-image cover-image__image-container ${additionalClasses.join(' ')}`}>
            <img    src={ imageUrl }
                    alt={ altText }
                    id={ imageId }
                    data-object-fit="cover"
            />
        </div>
    ) : null
}

CoverImage.propTypes = {
    additionalClasses: PropTypes.array,
    altText: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    imageId: PropTypes.string
}

CoverImage.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    altText: defaults.altText.value,
    imageId: defaults.imageId.value
}

export default CoverImage