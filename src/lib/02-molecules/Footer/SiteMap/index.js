/**
 * SITEMAP
 * 
 * Sitemap is a simple collection of links to be dispalyed in the footer
 * 
 */

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SiteMap = ({
    links
}) => {
    return (
        <div className="site-map">
            <p>Site Map</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                {
                    links.map((link, i) => <li key={ i }><Link to={ link.url }>{ link.text }</Link></li>)
                }
            </ul>
        </div>
    )
}

SiteMap.propTypes = {
    links: PropTypes.array.isRequired
}

export default SiteMap