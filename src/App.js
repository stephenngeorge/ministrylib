import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { CallToAction, HeroImage, HeroText, PlainText, TextLink } from './lib'

import HeroPortrait from './lib/demo/Rowena_1.jpg'

export default () => (
    <div className="app">
    <Router>
        <HeroImage      imageUrl={ HeroPortrait }
                        divHeight={64}
                        additionalClasses={['animate']}
                        altText="rowena portrait"
                        animate="onScroll"
        />
        <HeroText       bodyText="Esther Ministry was founded by Rowena Cross. Rowena is a speaker, church leader and evangelist with a passion to release people into their gifting and set them on fire for God."
                        headingText="Esther Ministry"
        />
        <CallToAction   paragraphText="Enquire about booking a course, find out more about Rowena and Esther Ministry"
                        backgroundColor="main"
                        buttonLink="#"
                        buttonText="Get in touch"
                        buttonColor="complementary"
                        buttonOutline="dark"
                        headingText="Find out more"
        />
        <PlainText      additionalClasses={['text--lead', 'text-container--narrow']}
                        text="Rowena serves as Assistant Pastor in charge of Evangelism and Discipleship at St Saviour's Church, Sunbury. She has appeared on UCB, and worked with organisations like TearFund and New Wine."
                        paragraphId="intro-text"
        />
        <TextLink       linkText="click me"
                        linkUrl="/"
                        variation="internal"
        />
    </Router>
    </div>
)