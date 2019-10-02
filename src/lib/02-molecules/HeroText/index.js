/**
 * HERO TEXT
 * 
 * HeroText component displays a heading with supporting 
 * text. Comprises <Title /> and <PlainText /> components 
 * which can be found in the 'atoms' directory
 * 
*/

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { Title, PlainText } from '../../01-atoms'

const HeroText = ({
    additionalClasses,
    bodyText,
    headingText
}) => {
    useEffect(() => {
        const positionText = () => {
            const titleHeight = Math.floor(document.querySelector('.text--site-title').offsetHeight)
            const textBlock = document.querySelector('.hero-textBlock')
            const yOffset = Math.ceil(-titleHeight / 2)
    
            textBlock.style.marginTop = `${yOffset}px`
        }
        positionText()
        window.addEventListener('resize', positionText)

        return () => document.removeEventListener('resize', positionText)
    }, [])

    return (
        <div className={`hero-textBlock ${additionalClasses.join(' ')}`}>
            <div className="content">
                <Title  headingLevel={ 1 }
                        headingText={ headingText }
                        additionalClasses={['text--site-title', 'font-weight--heavy', 'title__padded-text--main', 'color--light']}
                />
                <PlainText  text={ bodyText }
                            paragraphId="intro-text"
                />
            </div>
        </div>
    )
}

HeroText.propTypes = {
    additionalClasses: PropTypes.array,
    bodyText: PropTypes.string.isRequired,
    headingText: PropTypes.string,
}

HeroText.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    headingText: defaults.headingText.value,
}

export default HeroText