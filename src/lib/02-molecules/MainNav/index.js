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

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MainNav = ({
    menuItems,
    siteLogo
}) => {
    useEffect(() => {
        const menuIcon = document.querySelector('.main-nav__menu-icon')
        const navMenu = document.querySelector('.main-nav__menu')

        if (
            menuIcon !== null && menuIcon !== undefined && 
            navMenu !== null && navMenu !== undefined
        ) {
            const toggleNav = () => {
                console.log('toggle')
                navMenu.classList.toggle('in-view')
                menuIcon.classList.toggle('icon-transform')
            }
            menuIcon.addEventListener('click', toggleNav)
        }
    }, [])

    return (
        <nav className="main-nav">
            <div className="main-nav__icons">
                <div className="main-nav__site-logo">
                    {   !!siteLogo &&
                        <Link to="/">
                            <img alt="esther ministry logo" src={ siteLogo } />
                        </Link>
                    }
                </div>

                <div className="main-nav__menu-icon">
                    <div className="main-nav__menu-icon--bar"></div>
                    <div className="main-nav__menu-icon--bar"></div>
                </div>
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
    menuItems: PropTypes.array.isRequired,
    siteLogo: PropTypes.string
}

export default MainNav