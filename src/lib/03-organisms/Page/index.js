/**
 * PAGE
 * 
 * Page component is a layout component that wraps all the pages 
 * of the website, it comprises the MainNav and the Footer molecules
 * 
*/

import React from 'react'
import PropTypes from 'prop-types'

import { MainNav } from '../../02-molecules'

const Page = ({
    children,
    navLogo
}) => {
    return (
        <div className="page">
            <MainNav    siteLogo={ navLogo }
                        menuItems={[
                {
                    url: '/about',
                    text: 'About'
                },
                {
                    url: '/board',
                    text: 'Advisory Board'
                },
                {
                    url: '/contact',
                    text: 'Contact'
                }
            ]} />
            { children }
        </div>
    )
}

Page.propTypes = {
    navLogo: PropTypes.string
}

export default Page