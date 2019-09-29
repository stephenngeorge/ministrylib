const defaults = {
    additionalClasses: {
        value: []
    },
    variation: {
        value: 'internal',
        range: ['internal', 'external'],
        warning: "value out of range: you have passed an invalid value to the 'variation' prop, please pass either 'internal' or 'external'"
    }
}

export default defaults