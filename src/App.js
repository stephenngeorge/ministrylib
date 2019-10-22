/**
 * @todo remove demo folder and use proper image placeholders
 */

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import eventData from './event-data'

import { CallToAction, EventsList, HeroImage, HeroText, ImageBlock, Page, PlainText, TabContent, TextLink, QuoteBlock } from './lib'

import HeroPortrait from './lib/demo/Rowena_1.jpg'
import RoPortrait from './lib/demo/ro_BGPortrait.jpg'
import Site_Logo from './lib/demo/Esther_Logo_Green.jpg'

import siteLinks from './link-data'

export default () => (
    <div className="app">
        <Router>
            <Page   navLogo={ Site_Logo }
                    navLinks={ siteLinks }
                    footerAffiliation="International Justice Mission"
                    footerAffiliationUrl="https://www.ijmuk.org"
            >
                <HeroImage      imageUrl={ HeroPortrait }
                                divHeight={60}
                                additionalClasses={['animate']}
                                altText="rowena portrait"
                                animate="onScroll"
                />
                <HeroText       bodyText="Esther Ministry is an international mission to see people equipped, empowered and released into their true calling. Esther Minsitry was founded by Rowena Cross: a speaker, church leader and evangelist with a passion to release people into their gifting and set them on fire for God."
                                headingText="Esther Ministry"
                />
                <TabContent     tabs={[
                                    {
                                        color: 'main',
                                        key: 1,
                                        tabText: "Gifting Day",
                                        tabContent: {
                                            leadParagraph: "Esther Ministry is delivered as either a short course (3 evening sessions) or a one-day course, including prayer and interactive sessions.",
                                            supportingParagraph: "This includes a gifting questionnaire, results and an action plan. Participants are guided through exercises to help them discover their gifts. Everyone is encouraged to leave the day with a specific plan of how these gifts will be put into action. As well as delivering this course in churches and schools, Esther Ministry is also delivered to groups of staff at Tearfund as part of their building confidence course."
                                        }
                                    },
                                    {
                                        color: 'secondary',
                                        key: 2,
                                        tabText: "Clergy Spouse",
                                        tabContent: {
                                            leadParagraph: "Esther Ministry is delivered through a practical one day course, starting with worship and prayer and followed by interactive sessions including a gifting questionnaire with results and an action plan.",
                                            supportingParagraph: "As the wife of a vicar, I have experienced the huge pressure, privilege and lonliness that can be ministry life; with this in mind, I felt prompted to create an Esther day exclusively for partners of church leaders. I feel so passionately that if the other halves of church leaders are prepared, loved, supported and know what God is calling THEM to as well, then we will have stronger marriages, stronger parishes and stronger God-filled communities. Are you the spouse of a Church leader, Ordinand or Curate? Would you benefit from a day to discern your calling in all of this? Would you like support to prepare for ministry life or transition within ministry life? This one day course has been prepared exclusively for you, based on my journey and the epic fails, lonliness and joy I have faced so far. The course will help you discern who you are in Him, what your gifts are in this season and how you can operate within them."
                                        }
                                    }
                                ]}
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