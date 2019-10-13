/**
 * @todo remove demo folder and use proper image placeholders
 */

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import eventData from './event-data'

import { CallToAction, EventsList, HeroImage, HeroText, ImageBlock, Page, PlainText, TextLink, QuoteBlock } from './lib'

import HeroPortrait from './lib/demo/Rowena_1.jpg'
import RoPortrait from './lib/demo/ro_BGPortrait.jpg'

export default () => (
    <div className="app">
    <Router>
        <Page>
            <HeroImage      imageUrl={ HeroPortrait }
                            divHeight={60}
                            additionalClasses={['animate']}
                            altText="rowena portrait"
                            animate="onScroll"
            />
            <HeroText       bodyText="Esther Ministry is an international mission to see people equipped, empowered and released into their true calling. Esther Minsitry was founded by Rowena Cross: a speaker, church leader and evangelist with a passion to release people into their gifting and set them on fire for God."
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
            <EventsList     additionalClasses={['bg--secondary']}
                            data={ eventData }
            />
            <TextLink       linkText="see full calendar"
                            linkUrl="/"
                            variation="internal"
            />
            <ImageBlock     imageUrl={ RoPortrait }
                            imageAltText="rowena close up"
                            headingText="That Esther Moment"
                            leadText="Esther Ministry was founded to equip, empower and release people into their calling, so that everyone can have their 'Esther' moment."
                            supportingText="Esther was a beautiful queen who stepped out in faith, trusting in God and because of her bravery the lives of thousands of people were saved. Following the call that God has on your life is not just about serving others it is also about living as the person God intended you to be. I genuinely believed that I didn’t have any gifts. Esther didn’t believe in herself either and it took someone else to prompt her to discover her calling. So Esther Ministry was founded to provide a practical way to discover your true gifts and skills and put them into action for God."
            />
            <TextLink       linkText="find out more"
                            linkUrl="/"
                            variation="internal"
            />
            <QuoteBlock     additionalClasses={['bg--main', 'color--light']}
                            quoteText="This has given me fresh boldness to speak to everyone I know about Jesus"
            />
        </Page>
    </Router>
    </div>
)