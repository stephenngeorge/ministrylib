/**
 * CONTACT ICONS
 * 
 * ContactIcons components are used to display icons that 
 * link to different contact options like email and social 
 * media accounts.
 * ContactIcons take a contactMethods array which should be 
 * structured as follows:
 * 
 * [
 * ..{
 * ....contactName: string,
 * ....contactIcon: string,
 * ....contactUrl: string
 * ..}
 * ]
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const ContactIcons = ({
    additionalClasses,
    contactMethods
}) => {
    return (
        <section className={`contact-icons ${additionalClasses.join(" ")}`}>
            <ul className="contact-icons__contact-methods">
                {
                    contactMethods.map(method => (
                        <li key={method.contactName}>
                            <a href={method.contactUrl}>
                                <img src={method.contactIcon} alt={method.contactName} />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

ContactIcons.propTypes = {
    additionalClasses: PropTypes.array,
    contactMethods: PropTypes.array.isRequired
}

ContactIcons.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default ContactIcons