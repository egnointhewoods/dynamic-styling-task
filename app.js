const app = Vue.createApp({
  data() {
    return {
      paragraphClass: "",
      backgroundColor: "",
      isHidden: false,
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
      this.isHidden = !this.isHidden;
      console.log(this.isHidden);
    },
  },
});

app.mount("#assignment");
