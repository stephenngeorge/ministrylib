/**
 * CALL TO ACTION
 * 
 * CallToAction components are full-width blocks 
 * that contain a title, a body of text and a button
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { Button, PlainText, Title } from '../../01-atoms'

const CallToAction = ({
    additionalClasses,
    backgroundColor,
    buttonColor,
    buttonElement,
    buttonLink,
    buttonLinkType,
    buttonOnClick,
    buttonOutline,
    buttonText,
    headingId,
    headingLevel,
    headingText,
    paragraphId,
    paragraphText
}) => {
    // warn about defaults
    if (buttonElement !== 'a') console.warn(defaults.buttonElement.warning)

    return (
        <section className={`call-to-action container--full-width bg--${backgroundColor} ${additionalClasses.join(' ')}`}>
            <div className="call-to-action__text-content text-container--very-narrow">
                {
                    headingText !== defaults.headingText.value &&
                    <Title  additionalClasses={[`color--dark`]}
                            headingId={ headingId }
                            headingLevel={ headingLevel }
                            headingText={ headingText }
                    />
                }
                <PlainText  paragraphId={ paragraphId }
                            text={ paragraphText }
                />
            </div>

            <div className="call-to-action__button-container">
                <Button buttonColor={ buttonColor }
                        buttonText={ buttonText }
                        buttonElement={ buttonElement }
                        buttonLink={ buttonLink }
                        buttonLinkType={ buttonLinkType }
                        buttonOnClick={ buttonOnClick }
                        buttonOutline={ buttonOutline }
                        buttonSize="large"
                />
            </div>
        </section>
    )
}

/**
 * Button props:
 *      - buttonBlock: left to Button default
 *      - buttonSize: passed down as 'large' by force
 */
CallToAction.propTypes = {
    additionalClasses: PropTypes.array,
    backgroundColor: PropTypes.string,
    buttonColor: PropTypes.string,
    buttonElement: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonLinkType: PropTypes.string,
    buttonOnClick: PropTypes.func,
    buttonOutline: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    headingId: PropTypes.string,
    headingLevel: PropTypes.number,
    headingText: PropTypes.string,
    paragraphId: PropTypes.string,
    paragraphText: PropTypes.string.isRequired
}

CallToAction.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    buttonColor: defaults.buttonColor.value,
    buttonElement: defaults.buttonElement.value,
    buttonLinkType: defaults.buttonLinkType.value,
    buttonOutline: defaults.buttonOutline.value,
    headingId: defaults.headingId.value,
    headingLevel: defaults.headingLevel.value,
    headingText: defaults.headingText.value,
    paragraphId: defaults.paragraphId.value
}

export default CallToAction