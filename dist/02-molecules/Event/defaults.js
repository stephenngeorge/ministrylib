var defaults = {
  additionalClasses: {
    value: []
  },
  bookable: {
    value: false
  },
  bookingUrl: {
    value: "",
    warning: "You have set the 'bookable' prop to true but not provided a url for the link, please pass a valid url to the 'bookingUrl' prop"
  }
};
export default defaults;