import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import SiteMap from './SiteMap'

const Footer = ({
    affiliation,
    affiliationUrl,
    siteMapLinks
}) => {
    return (
        <footer className="footer container">
            <div className="footer__affiliation">
                <p>Esther Ministry is proud to support the</p>
                <Link to={ affiliationUrl }>{ affiliation }</Link>
            </div>
            <SiteMap links={ siteMapLinks } />
        </footer>
    )
}

Footer.propTypes = {
    affiliation: PropTypes.string,
    affiliationUrl: PropTypes.string,
    siteMapLinks: PropTypes.array
}

export default Footer