var defaults = {
  additionalClasses: {
    value: []
  },
  animate: {
    value: 'none',
    range: ['onScroll', 'onClick', 'none'],
    warning: 'value out of range: you have passed an invalid value to the "animate" prop, please pass one of "onScroll", "onClick" or "none"'
  },
  divHeight: {
    value: 72,
    warning: 'you have not provided a div height. A default has been used, but you can set your own by passing a number to the "divHeight" prop'
  }
};
export default defaults;