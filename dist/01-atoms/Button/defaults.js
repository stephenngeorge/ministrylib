var defaults = {
  additionalClasses: {
    value: []
  },
  buttonBlock: {
    value: false
  },
  buttonColor: {
    value: 'light',
    range: ['main', 'complementary', 'secondary', 'light', 'dark'],
    warning: 'You have passed an invalid colour to the "buttonColor" prop, please pass one of "main", "complementary", "secondary", "light", "dark"'
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
    value: 'light',
    range: ['main', 'complementary', 'secondary', 'light', 'dark'],
    warning: 'You have passed an invalid colour to the "buttonOutline" prop, please pass one of "main", "complementary", "secondary", "light", "dark"'
  },
  buttonSize: {
    value: 'reg',
    warning: 'button_size: value out of range - button size must be one of "small", "reg", "large"',
    range: ["small", "reg", "large"]
  }
};
export default defaults;