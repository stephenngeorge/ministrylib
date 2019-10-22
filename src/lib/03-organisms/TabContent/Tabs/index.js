import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const Tabs = ({
    additionalClasses,
    setActiveTab,
    tabs
}) => {
    return (
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
    )
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