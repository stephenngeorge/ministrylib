/**
 * CONTENT
 * 
 * Content component is to be used in the TabContent component. It renders 
 * the content of a particular piece of tabulated content. Which tab and tab-content 
 * is rendered is controlled by the Tabs components (../Tabs)
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { PlainText } from '../../../01-atoms'

const Content = ({
    activeTab,
    additionalClasses
}) => {
    return (
        <div className={`tab-contents ${additionalClasses.join(" ")} bg--${activeTab.color}` }>
            <PlainText  additionalClasses={['tab-contents__lead-paragraph']}
                        text={ activeTab.tabContent.leadParagraph }
            />
            <PlainText  additionalClasses={['tab-contents__supporting-paragraph']}
                        text={ activeTab.tabContent.supportingParagraph }
            />
        </div>
    )
}

Content.propTypes = {
    activeTab: PropTypes.object.isRequired,
    additionalClasses: PropTypes.array
}

Content.defaultProps = {
    additionalClasses: defaults.additionalClasses.value
}

export default Content