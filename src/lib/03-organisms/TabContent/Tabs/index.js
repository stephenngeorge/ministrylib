/**
 * TABS
 * 
 * Tabs component is to be used in the TabContent component. It 
 * renders a list or "menu" of tabulated content and handles the 
 * active/inactive state of the tabs
 *  
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const Tabs = ({
    additionalClasses,
    setActiveTab,
    tabs
}) => {
    return tabs.length > 0 ? (
        <ul className={`tabs ${additionalClasses.join(" ")}`}>
            {
                tabs.map((tab, i) => (
                    <li onClick={ () => setActiveTab(tab.key) }
                        key={ i } 
                        className={`bg--${tab.color}`}
                    >
                        { tab.tabText }
                    </li>
                ))
            }
        </ul>
    ) : null
}

Tabs.propTypes = {
    additionalClasses: PropTypes.array,
    setActiveTab: PropTypes.func.isRequired,
    tabs: PropTypes.array.isRequired
}

Tabs.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default Tabs