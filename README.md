# Ministry Lib

This is a simple react component library specifically designed for the projects:
- estherministry
- rowenacross

## Components
Based on the atomic design principles, Ministry Lib has directories of "atoms", 
"molecules" and "organisms". For ease of reference, the components are listed 
below in the format:

#### Component Name
Component description...
```
props: {
    propName: propType
}
```

In addition to the listed props, **every** component also has access to the 
'additionalClasses' props, an array of strings, where each array item is a class 
name that you want to add to the component in question. E.g.:
```
<Button additionalClasses={['loris-button', 'loris-button--large']} />
```
Or this works just as well:
```
// example classes only, applying these won't actually do
// anything to your buttons...
const buttonClasses = ['loris-button', 'loris-button--large']
<Button additionalClasses={ buttonClasses } />
```

### Atoms
#### Button
Customisable and flexible button component.
```
props: {
    buttonBlock: boolean,
    buttonColor: string,
    buttonElement: string,
    buttonId: string,
    buttonLink: string,
    buttonOnClick: function,
    buttonOutline: string,
    buttonSize: string,
    buttonText: string [required]
}
```

#### ContentBox
Layout component that ensures content doesn't spill over a maximum breakpoint
```
props: {
    centreWith: string
}
```

#### CoverImage
Image component that uses object fit to ensure image always covers its container.
```
props: {
    altText: string,
    imageUrl: string [required],
    imageId: string
}
```

#### Plain Text
Simple component for displaying text content.
```
props: {
    paragraphId: string,
    text: string [required]
}
```

#### Text Link
Simple link (not button) that points to an internal or external resource.
```
props: {
    linkText: string [required],
    linkUrl: string [required],
    variation: string
}
```

#### Title
Simple component for displaying a heading.
```
props: {
    headingId: string,
    headingLevel: number,
    headingText: string [required]
}
```

### Molecules
#### Call To Action
A component displaying text and a button.
```
props: {
    backgroundColor: string,
    buttonColor: string,
    buttonElement: string,
    buttonLink: string,
    buttonOnClick: func,
    buttonOutline: string,
    buttonText: string [required],
    headingId: string,
    headingLevel: number,
    headingText: string,
    paragraphId: string,
    paragraphText: string [required]
}
```

#### ContactIcons
A list of images that act as links to different social media/email addresses.
```
props: {
    contactMethods: array [required]
}
```
Each item in the contactMethods array should be an object of shape:
```
contactName: string,
contactIcon: string (image file path),
contactUrl: string
```

#### Event
Presentational component designed to be consumed by the EventList organism.
```
props: {
    bookable: boolean,
    bookingUrl: string,
    date: number [required],
    location: string [required],
    type: string [required]
}
```

#### Footer
Footer for the page wrapper component, gets rendered on every page. Includes 
the SiteMap component.
```
props: {
    affiliation: string,
    affiliationUrl: string,
    siteMapLinks: array
}
```

#### Hero Image
Image components that covers the whole of its container. Has some 
animations applied.
```
props: {
    altText: string,
    animate: string,
    divHeight: number,
    imageUrl: string [required]
}
```

#### Hero Text
Site title and supporting text for the top of the homepage.
```
props: {
    bodyText: string [required],
    headingText: string
}
```

#### Main Nav
The main site navigation, displayed at the top of every page.
```
props: {
    menuItems: array [required],
    siteLogo: string
}
```
Each item in the menuItems array should be an object of shape:
```
url: string,
text: string
```

#### Profile
Image and text to introduce a person.
```
props: {
    profile: object [required]
}
```
The profile object should be of shape:
```
name: string,
description: string,
imageUrl: string (image file path)
```

#### Quote Block
For displaying text with an attribution/accreditation.
```
props: {
    backgroundImage: string,
    citation: string,
    citationUrl: string,
    quoteText: string [required],
    source: string
}
```

#### Testimonial
Similar to a quote block but without the background image functionality.
```
props: {
    source: string,
    testimonialText: string [required]
}
```

### Organisms
#### Events List
Displays a list of events with controls to scroll from one month to the next.
Contains 'Controls' and 'Month' components.
```
props: {
    data: array [required]
}
```
Each item in the data array should be an object of shape:
```
month: string,
events: [
    {
        date: number,
        type: string,
        location: string,
        bookable: boolean,
        bookingUrl: string
    }
]
```

#### Image Block
Displays an image with supporting text, switches between vertical and 
horizontal alignment on different breakpoints.
```
props: {
    headingText: string,
    imageAltText: string,
    imageUrl: string [required],
    leadText: string [required],
    supportingText: string
}
```

#### Page
Wrapper component that includes generic content that is common to every 
page (navbar, footer etc).
```
props: {
    footerAffiliation: string,
    footerAffiliationUrl: string,
    navLinks: array [required],
    navLogo: string
}
```

#### Profiles List
Displays a collection of Profile components.
```
props: {
    profiles: array [required]
}
```

#### Tab Content
Displays a list of tabs and associated content to switch between. Contains 
the 'Tabs' and 'Contents' components.
```
props: {
    tabs: array [required]
}
```
Each item of the tabs array should be an object of shape:
```
class: string,
key: number,
tabText: string,
tabContent: {
    leadParagraph: string,
    supportingParagraph: string
}
```