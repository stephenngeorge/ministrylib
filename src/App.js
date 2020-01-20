/**
 * @todo remove demo folder and use proper image placeholders
 */

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import eventData from './event-data'

import { CallToAction, ContactIcons, EventsList, HeroImage, HeroText, Image, ImageBlock, ImageRow, Page, PlainText, ProfilesList, QuoteBlock, TabContent, Testimonial, TextLink, ContentBox } from './lib'

import HeroPortrait from './demo/Rowena_1.jpg'
import RoPortrait from './demo/ro_BGPortrait.jpg'
import Site_Logo from './demo/Esther_Logo_Green.jpg'
import BibleBackground from './demo/bible_background.jpg'
import facebookIcon from './demo/facebook-logo.png'
import emailIcon from './demo/email-icon.png'
import instagramIcon from './demo/instagram-logo.png'
import GenRylett from './demo/GenRylett_portrait.jpg'
import LouieThorpe from './demo/LouieThorpe_portrait.jpg'
import SharronCoburn from './demo/sharronCoburn_portrait.jpg'
import SusiePerkin from './demo/susiePerkin_portrait.jpg'
import RoCloseUp from './demo/ro_close_up.jpg'
import RoSpeaking from './demo/ro_speaking.jpg'
import RoKempton from './demo/ro_at_kempton.jpg'

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
                />
                <HeroText headingText="esther ministry long title wraps">
                  <p>
                    Esther Ministry is an international mission to see people equipped, 
                    empowered and released into their true calling. Esther Minsitry was 
                    founded by Rowena Cross: an <a href="https://archbishops-evangelists.uk/">Archbishop's Evangelist</a>, speaker, church leader and evangelist 
                    with a passion to release people into their gifting and set them on 
                    fire for God.
                  </p>
                </HeroText>
                <ImageRow       images={[
                                  {
                                    name: "rowena speaking",
                                    url: RoSpeaking
                                  },
                                  {
                                    name: "rowena close up",
                                    url: RoCloseUp
                                  },
                                  {
                                    name: "rowena at kempton",
                                    url: RoKempton
                                  }
                                ]}
                />
                <TabContent     tabs={[
                                    {
                                        color: 'main',
                                        key: 1,
                                        tabText: "Gifting Day",
                                        tabContent: {
                                            leadParagraph: "<p>Esther Ministry is delivered as either a short course (3 evening sessions) or a one-day course, including prayer and interactive sessions.</p>",
                                            supportingParagraph: "<p>This includes a gifting questionnaire, results and an action plan. Participants are guided through exercises to help them discover their gifts. Everyone is encouraged to leave the day with a specific plan of how these gifts will be put into action. As well as delivering this course in churches and schools, Esther Ministry is also delivered to groups of staff at Tearfund as part of their building confidence course.</p>"
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
                <Image imageUrl={ RoPortrait } imageAltText="rowena portrait" />
                <CallToAction   paragraphText="Enquire about booking a course, find out more about Rowena and Esther Ministry"
                                backgroundColor="main"
                                buttonLink="#"
                                buttonText="Get in touch"
                                buttonColor="complementary"
                                buttonOutline="dark"
                                headingText="Find out more"
                />
                <ProfilesList   profiles={[
                                    {
                                        name: "Louie Thorpe",
                                        description: 'Louie is married to Ric and together they church planted to the East End of London before moving to Islington last year for Ric\'s post as Bishop. They have 3 teenagers and a Springer Spaniel, so life if never dull! She\'s been involved in mission all her life and loves to worship and help individuals and couples to flourish. She loves music, dancing and sport of all kinds and walks in the countryside.',
                                        imageUrl: LouieThorpe
                                    },
                                    {
                                        name: "Sharon Coburn",
                                        description: "Sharron first entered Christian Ministry at the age of 17 as a youth worker and has always held a passion for people to reach their full potential in God. She is a Parish Priest in a Suffolk Market Town and the Young Vocations Officer in the Diocese of St. Edmundsbury and Ipswich.",
                                        imageUrl: SharronCoburn
                                    },
                                    {
                                        name: "Susie Perkin",
                                        description: "Susie is married to Jonathan; they live in Churchdown, Gloucester where Susie works as a nurse and support Jonathan in running St Andrew's Church.",
                                        imageUrl: SusiePerkin
                                    },
                                    {
                                        name: "Gen Rylett",
                                        description: "Gen has been married to Adam for 13 years...wife to a student, youth worker and vicar. Same man though!! She has 3 kids, loves Jesus, family, cycling, walks, books and time on her own!",
                                        imageUrl: GenRylett
                                    }
                                ]}
                />
                <QuoteBlock     backgroundImage={ BibleBackground }
                                quoteText="Who knows if perhaps you were made Queen for such a time as this?"
                                source="Esther 4:14"
                />
                <ContactIcons   additionalClasses={[
                                    'bg--secondary'
                                ]}
                                contactMethods={[
                                    {
                                        contactName: "facebook",
                                        contactIcon: facebookIcon,
                                        contactUrl: "https://google.co.uk"
                                    },
                                    {
                                        contactName: "email",
                                        contactIcon: emailIcon,
                                        contactUrl: "mailto:person@email.co.uk?Subject=Website%20Enquiry"
                                    },
                                    {
                                        contactName: "instagram",
                                        contactIcon: instagramIcon,
                                        contactUrl: "https://google.co.uk"
                                    }
                                ]}
                />
                <ContentBox>
                    <PlainText      additionalClasses={['text--lead', 'white-space-y', 'text-container--very-narrow']}
                                    paragraphId="intro-text"
                    >
                      <a href="#">lorem ipsum</a>
                    </PlainText>
                </ContentBox>
                <EventsList     additionalClasses={['bg--secondary']}
                                // data={ eventData }
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
                <Testimonial    additionalClasses={['bg--main', 'color--light']}
                                testimonialText="This has given me fresh boldness to speak to everyone I know about Jesus"
                />
            </Page>
        </Router>
    </div>
)