// Define the mixin
const DateHelper = {
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    },
    formatTime(date) {
      const options = { hour: "numeric", minute: "numeric", hour12: true };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    },
    formatDateTime(date) {
      return `${this.formatDate(date)} ${this.formatTime(date)}`;
    },
  },
};

export default DateHelper;
