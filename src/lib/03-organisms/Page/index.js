/**
 * PAGE
 * 
 * Page component is a layout component that wraps all the pages 
 * of the website, it comprises the MainNav and the Footer molecules
 * 
*/

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Footer, MainNav } from '../../02-molecules'

const Page = ({
    children,
    footerAffiliation,
    footerAffiliationMessage,
    footerAffiliationUrl,
    navLinks,
    navLogo
}) => {
    useEffect(() => {
      const positionFooter = () => {
        const footer = document.querySelector('.footer')
        const page = document.querySelector('.page')
        if (footer !== null && footer !== undefined) {
          page.style.paddingBottom = `${footer.clientHeight}px`
        }
      }

      positionFooter()
      window.addEventListener('resize', positionFooter)

      return () => {
        window.removeEventListener('resize', positionFooter)
      }
    }, [])

    return (
        <div className="page">
            <MainNav    siteLogo={ navLogo }
                        menuItems={ navLinks } />
            { children }
            <Footer     affiliation={ footerAffiliation }
                        affiliationMessage={ footerAffiliationMessage }
                        affiliationUrl={ footerAffiliationUrl }
                        siteMapLinks={ navLinks }
            />
        </div>
    )
}

Page.propTypes = {
    footerAffiliation: PropTypes.string,
    footerAffiliationMessage: PropTypes.string,
    footerAffiliationUrl: PropTypes.string,
    navLinks: PropTypes.array.isRequired,
    navLogo: PropTypes.string
}

export default Page