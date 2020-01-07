/**
 * IMAGE ROW
 * 
 * Image row components display 3 images alongside 
 * each other, on smaller screen sizes these images 
 * become full-width and auto-scroll.
 * 
 * Image Row takes an images prop, an array in which
 * each image should be structured as follows:
 * {
 * ..[
 * ....name: String,
 * ....url: String (filepath)
 * ..]
 * }
 * 
*/

import React from 'react'
import PropTypes from 'prop-types'

import { CoverImage } from '../../01-atoms'

import defaults from './defaults'

const ImageRow = ({
  additionalClasses,
  images
}) => {
  return (
    <div className={`image-row ${additionalClasses.join(' ')}`}>
      { images.length > 0 &&
        images.map(image => {
          return <CoverImage key={ image.name } altText={ image.name } imageUrl={ image.url } />
        })
      }
    </div>
  )
}

ImageRow.propTypes = {
  additionalClasses: PropTypes.array,
  images: PropTypes.array.isRequired
}

ImageRow.defaultProps = {
  additionalClasses: defaults.additionalClasses.value
}

export default ImageRow