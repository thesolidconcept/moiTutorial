let app = new Vue({
  el: "#app",
  data: {
    width: 0,
    height: 0,
  },
  methods: {
    printData() {
      console.log("Width: " + this.width);
      console.log("Height: " + this.height);
    }
  },
  computed: {
    area () {
      return Rectangle.area(this.width, this.height);
    }
  }
});
