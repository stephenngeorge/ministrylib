/**
 * CALL TO ACTION
 * 
 * CallToAction components are full-width blocks 
 * that contain a title, a body of text and a button
 * 
 * @todo setup props to be passed to BUTTON component
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { Column, Container } from '../../00-protons'
import { Button, PlainText, Title } from '../../01-atoms'

const CallToAction = ({
    additionalClasses,
    buttonColor,
    buttonElement,
    buttonLink,
    buttonOnClick,
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
        <section className={`call-to-action ${additionalClasses.join(' ')}`}>
            <Container fullWidth={true} backgroundColor="green">
                <Column span={12}>
                    <div className="call-to-action__text-content">
                        {
                            headingText !== defaults.headingText.value &&
                            <Title  headingId={ headingId }
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
                                buttonOnClick={ buttonOnClick }
                                buttonOutline={ true }
                                buttonSize="large"
                        />
                    </div>
                </Column>
            </Container>
        </section>
    )
}

/**
 * Button props:
 *      - buttonBlock: left to Button default
 *      - buttonOutline: left to Button default
 *      - buttonSize: passed down as 'large' by force
 */
CallToAction.propTypes = {
    additionalClasses: PropTypes.array,
    buttonColor: PropTypes.string,
    buttonElement: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonOnClick: PropTypes.func,
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
    headingId: defaults.headingId.value,
    headingLevel: defaults.headingLevel.value,
    headingText: defaults.headingText.value,
    paragraphId: defaults.paragraphId.value
}

export default CallToAction