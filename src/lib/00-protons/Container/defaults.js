const defaults = {
    additionalClasses: {
        value: []
    },
    backgroundColor: {
        value: 'white',
        range: ['dark-grey', 'green', 'white'],
        warning: "You passed a value that isn't a theme colour, please pass one of 'dark-grey', 'green' or 'white' to the 'backgroundColor' prop"
    },
    padding: {
        value: true
    },
    full_width: {
        value: false
    }
}

export default defaults