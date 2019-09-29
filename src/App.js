import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { CallToAction, TextLink } from './lib'

export default () => (
    <div className="app">
    <Router>
        <CallToAction   paragraphText="Enquire about booking a course, find out more about Rowena and Esther Ministry"
                        backgroundColor="main"
                        buttonLink="#"
                        buttonText="Get in touch"
                        buttonColor="complementary"
                        buttonOutline="dark"
                        headingText="Find out more"
        />
        <TextLink linkText="click me" linkUrl="/" variation="internal" />
    </Router>
    </div>
)