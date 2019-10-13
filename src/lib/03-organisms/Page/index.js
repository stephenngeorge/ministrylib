/**
 * PAGE
 * 
 * Page component is a layout component that wraps all the pages 
 * of the website, it comprises the MainNav and the Footer molecules
 * 
*/

import React from 'react'
import { MainNav } from '../../02-molecules'

const Page = ({
    children
}) => {
    return (
        <div className="page">
            <MainNav menuItems={[
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

export default Page