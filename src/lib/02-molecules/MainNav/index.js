/**
 * MAIN NAV
 * 
 * MainNav component is the main site navigation for use at the top 
 * of every page. It receives an array of menuItems, the data for which 
 * should be structured as follows:
 * 
 * [
 * ..{
 * ....url: String, path to the target page,
 * ....text: String, the text to be clicked on
 * ..}
 * ]
 * 
*/

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MainNav = ({
    menuItems
}) => {
    return (
        <nav className="main-nav">
            <div className="main-nav__site-logo">
            </div>

            <ul className="main-nav__menu">
                {   menuItems.length > 0 &&
                    menuItems.map((item, i) => {
                        return (
                            <li key={ i } className="main-nav__menu--item">
                                <Link to={item.url}>{ item.text }</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

MainNav.propTypes = {
    menuItems: PropTypes.array.isRequired
}

export default MainNav