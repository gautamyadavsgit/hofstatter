export default {
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    scroll(refName) {
      refName.scrollIntoView(); 
    },
    //event section scroll for focusing on the button
    eventSectionScroll() {
      // checking if the section is already scroll to button
      if (!this.clicked) {
        this.clicked = true;
        window.scrollTo({ top: window.pageYOffset - 200, behavior: "smooth" });
      }
    },
  },
};
