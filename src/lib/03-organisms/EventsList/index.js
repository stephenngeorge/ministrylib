/**
 * EVENTLIST
 * 
 * Event List components display a block of controls (left, right arrows and 
 * the month name) with a <Month /> components beneath.
 * 
 * Event List recieves data, which should be structured:
 * [
 * ..{
 * ....month<string>: 'January',
 * ....events<array>: [
 * ......{
 * ........date<number>: 1,
 * ........type<string>: "Event Category",
 * ........location<string>: "String with whatever information is available",
 * ........bookable<boolean>: true, [optional]
 * ........bookingUrl<string>: "valid url" [optional]
 * ......}
 * ....]
 * ..}
 * ]
 * 
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import Controls from './Controls'
import Month from './Month'
import { ContentBox, Title } from '../../01-atoms'

const EventsList = ({
    additionalClasses,
    data,
    noEventsMessage
}) => {
    const [monthIndex, setMonthIndex] = useState(0)
    return !!data.length ? (
        <section className={`events-list ${additionalClasses.join(" ")}`}>
            <ContentBox>
                <Title headingLevel={2} headingText="Upcoming Events" />
                <Controls months={ data.map(event => event.month) } setMonthIndex={setMonthIndex} />
                <Month month={data[monthIndex]} />
            </ContentBox>
        </section>
    ) : (
        <section className={`events-list events-list--empty ${additionalClasses.join(" ")}`}>
            <ContentBox>
                <Title headingLevel={2} headingText="Upcoming Events" />
                <p>{ noEventsMessage }</p>
            </ContentBox>
        </section>
    )
}

EventsList.propTypes = {
    additionalClasses: PropTypes.array,
    data: PropTypes.array.isRequired,
    noEventsMessage: PropTypes.string
}

EventsList.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    data: defaults.data.value,
    noEventsMessage: defaults.noEventsMessage.value
}

export default EventsList