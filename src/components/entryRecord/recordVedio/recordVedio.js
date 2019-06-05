export default {
  data() {
    return {
      name:'',
      wristbandNum:''
    }
  },
  // },
  // li显示
  methods: {
    currentShow(e) {
      if (e.currentTarget.className == "currentShow") {
        e.currentTarget.className = ""
      } else {
        e.currentTarget.className = "currentShow"
      }
    },
    getParams() {
      this.name = this.$route.query.name
      this.wristbandNum = this.$route.query.wristbandNum
    }
  },
  created() {
    this.getParams()
  }
}
