/**
 * FOOTER
 * 
 * Footer component is rendered in the Page layout component and 
 * therefore appears at the bottom of the page. Extra child components 
 * could be added here as the project grows. Footer currently displays 
 * a link the affiliated charity and a basic site map.
 * 
 */

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import SiteMap from './SiteMap'

import { ContentBox } from '../../01-atoms'

const Footer = ({
    affiliation,
    affiliationMessage,
    affiliationUrl,
    siteMapLinks
}) => {
    return (
        <footer className="footer container--full-width">
            <ContentBox>
              {
                !!affiliation &&
                <div className="footer__affiliation">
                    <p>{ affiliationMessage }</p>
                    <Link to={ affiliationUrl }>{ affiliation }</Link>
                </div>
              }
              <SiteMap links={ siteMapLinks } />
            </ContentBox>
        </footer>
    )
}

Footer.propTypes = {
    affiliation: PropTypes.string,
    affiliationMessage: PropTypes.string,
    affiliationUrl: PropTypes.string,
    siteMapLinks: PropTypes.array
}

export default Footer