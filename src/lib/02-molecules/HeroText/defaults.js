const defaults = {
    additionalClasses: {
        value: []
    },
    headingText: {
        value: 'Page Title',
        warning: 'you have not specified any heading text. A default has been used but you should set your own by passing a string to the "headingText" prop'
    },
    variation: {
        value: 'standard',
        warning: 'you have passed an invalid string to the "variation prop", please pass "standard", "angled"',
        range: ['standard', 'angled']
    }
}

export default defaults