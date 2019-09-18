const defaults = {
    additionalClasses: {
        value: []
    },
    backgroundColor: {
        value: 'light',
        range: ['main', 'secondary', 'light'],
        warning: "You passed a value that isn't a theme colour, please pass one of 'dark-grey', 'green' or 'white' to the 'backgroundColor' prop"
    },
    padding: {
        value: true
    },
    fullWidth: {
        value: false
    }
}

export default defaults