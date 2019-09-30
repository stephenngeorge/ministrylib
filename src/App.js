import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { CallToAction, HeroImage, TextLink } from './lib'

import HeroPortrait from './lib/demo/Rowena_1.jpg'

export default () => (
    <div className="app">
    <Router>
        <HeroImage      imageUrl={ HeroPortrait }
                        divHeight={70}
                        additionalClasses={['animate']}
                        altText="rowena portrait"
        />
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