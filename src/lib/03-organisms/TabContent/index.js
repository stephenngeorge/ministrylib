/**
 * TABCONTENT
 * 
 * Tab Content components are used to display an array of information where 
 * each "chunk" of information is stored under a "tab". It renders a Tabs component 
 * (a list of tabs that determines the content) and a Content component that is passed 
 * a particular tab from the array.
 * An array of 'tabs' must be provided, data should be structured:
 * [
 * ..{
 * ....class: "green",
 * ....key: "1" | 1,
 * ....tabText: "Tab 1",
 * ....tabContent: {
 * ......leadParagraph: "lorem ipsum",
 * ......supportingParagraph: "lorem ipsum"
 * ....}
 * ..}
 * ]
 * 
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import Tabs from './Tabs'
import Content from './Content'

const TabContent = ({
    additionalClasses,
    tabs
}) => {
    const [activeTab, setActiveTab] = useState(1)
    console.log(activeTab)
    return (
        <div className={`tab-content ${additionalClasses.join(" ")}`}>
            <Tabs setActiveTab={ setActiveTab } tabs={ tabs } />
            <Content activeTab={ tabs[tabs.map(tab => tab.key).indexOf(activeTab)] } />
        </div>
    )
}

TabContent.propTypes = {
    additionalClasses: PropTypes.array,
    tabs: PropTypes.array.isRequired
}

TabContent.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default TabContent