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

import { ContentBox } from '../../01-atoms'

const MainNav = ({
    menuItems,
    siteLogo
}) => {
    // ANIMATE NAV BAR ON MENU ICON CLICK (small breakpoints)
    useEffect(() => {
        const menuIcon = document.querySelector('.main-nav__menu-icon')
        const navMenu = document.querySelector('.main-nav__menu')
        const contentBox = document.querySelector('.content-box.nav-box')
        
        const toggleNav = () => {
            navMenu.classList.toggle('in-view')
            contentBox.classList.toggle('in-view')
            menuIcon.classList.toggle('icon-transform')
        }

        if (
            menuIcon !== null && menuIcon !== undefined && 
            navMenu !== null && navMenu !== undefined
        ) {
            menuIcon.addEventListener('click', toggleNav)
        }

        return () => menuIcon.removeEventListener('click', toggleNav)
    }, [])

    const closeMenu = () => {
        window.scrollTo(0, 0)
        const navMenu = document.querySelector('.main-nav__menu')
        const menuIcon = document.querySelector('.main-nav__menu-icon')
        const contentBox = document.querySelector('.content-box.nav-box')

        navMenu.classList.remove('in-view')
        contentBox.classList.remove('in-view')
        menuIcon.classList.remove('icon-transform')
    }
    return (
        <nav className="main-nav">
            <ContentBox additionalClasses={['nav-box']}>
                <div className="main-nav__top-bar">
                    <div className="main-nav__site-logo">
                        {   !!siteLogo &&
                            <Link to="/">
                                <img onClick={closeMenu} alt="esther ministry logo" src={ siteLogo } />
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
                                <li onClick={closeMenu} key={ i } className="main-nav__menu--item">
                                    <Link to={ item.url }>{ item.text }</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </ContentBox>
        </nav>
    )
}

MainNav.propTypes = {
    menuItems: PropTypes.array.isRequired,
    siteLogo: PropTypes.string
}

export default MainNav