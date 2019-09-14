const defaults = {
    additionalClasses: {
        value: []
    },
    buttonBlock: {
        value: false
    },
    buttonColor: {
        value: 'white'
    },
    buttonElement: {
        value: 'button'
    },
    buttonId: {
        value: ''
    },
    buttonLink: {
        value: null,
        warning: 'You set the button element as "<a>" but did not provide a link for the href, please pass one as a string to the "buttonLink" prop'
    },
    buttonOnClick: {
        value: null,
        warning: 'You set the button element as "<button>" but did not provide a function to handle the click, please pass one to the "buttonOnClick" prop'
    },
    buttonOutline: {
        value: false
    },
    buttonSize: {
        value: 'reg',
        warning: 'button_size: value out of range - button size must be one of "small", "reg", "large"',
        range: ["small", "reg", "large"]
    }
}

export default defaults