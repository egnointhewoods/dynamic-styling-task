const app = Vue.createApp({
  data() {
    return {
      paragraphClass: "",
      backgroundColor: "",
      visibility: true,
    };
  },
  methods: {
    setClass(event) {
      this.paragraphClass = event.target.value;
    },
    setBackgroundColor(event) {
      this.backgroundColor = event.target.value;
    },
    toggleParagraph() {
      if (this.visibility) {
        this.paragraphClass = `${this.paragraphClass} hidden`;
      } else {
        this.paragraphClass = `${this.paragraphClass} visible`;
      }
      this.visibility = !this.visibility;
    },
  },
});

app.mount("#assignment");
