export default {
  data() {
    return {
      name: '',
      wristbandNum: ''
    }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();

      // placeholder 兼容ie9
      function isPlaceholder() {
        var input = document.createElement("input");
        return "placeholder" in input;
      }
      isPlaceholder();
    };

    window.onscroll = (function () {
      var scroll = document.getElementById("recordtable-scroll");
      var scrollSe = document.getElementById("recordtable-scroll-se");
      var content = document.getElementById("recordtable-content-se");
      var contentSe = document.getElementById("recordtable-content");
      var scrollBar = document.getElementById("recordtable-scroll-bar");
      var bar = document.getElementById("recordtable-bar");
      var scrollH = scroll.offsetHeight;
      var scrollSeH = scrollSe.offsetHeight;
      var contentH = content.offsetHeight;
      var contentSeH = contentSe.offsetHeight;

      // 滚动条框 和框体的高度是一样的
      // scrollBar.style.height = contentH + "px";
      // scrollBar.style.height = scrollH * 1.6 + "px";
      // 开始我想用right的,但是ie7 不兼容
      // scrollBar.style.left = scroll.offsetWidth - 26 + "px";
      // scrollBar.style.left = contentW - 130 + "px";
      // scrollBar.style.left = contentW + "px";
      // 滚动条的高度等于 框体高*(框体的高度比上内容的高度);
      // bar.style.height = scrollH * (scrollH / contentH) + 'px';
      var isMove = false; //是否开启滑动
      var oldY = 0; //滑动之前的老位置 初始化为0
      bar.onmousedown = function (event) {
        var event = event || window.event;
        oldY = event.clientY;
        isMove = true;
        return false;
      };
      document.onmouseup = function () {
        isMove = false;
        return false;
      };
      document.onmousemove = function (event) {
        var event = event || window.event;
        if (isMove) {
          // 滚动条变化的值 dirY
          var dirY = event.clientY - oldY;
          goOn(dirY);
          oldY = event.clientY;
        }
      };
      // 滚动事件
      scroll.onmousewheel = function (event) {
        var event = event || window.event;
        // event.wheelDelta 每次滚动都是+-120  这里设置一个系数 120 太大了更适合浏览器的滚动
        goOn(-event.wheelDelta * 0.2);
        return false;
      };

      scrollSe.onmousewheel = function (event) {
        var event = event || window.event;
        // event.wheelDelta 每次滚动都是+-120  这里设置一个系数 120 太大了更适合浏览器的滚动
        goOn(-event.wheelDelta * 0.2);
        return false;
      };


      function goOn(dirY) {
        // 滚动条滚动
        bar.style.marginTop = bar.offsetTop + dirY + "px";
        // 越界处理
        if (bar.offsetTop < 0) {
          bar.style.marginTop = "0px";
        }
        if (bar.offsetTop + bar.offsetHeight > scrollBar.offsetHeight) {
          bar.style.marginTop =
            scrollBar.offsetHeight - bar.offsetHeight + "px";
        }
        // 内容框的margin-top
        content.style.marginTop = -bar.offsetTop / ((scrollH - 10) / contentH) + "px";

        contentSe.style.marginTop = -bar.offsetTop / ((scrollSeH - 10) / contentSeH) + "px";
      }
    })();
  },
  watch: {
    '$route': 'getParams'
  },

  methods: {
    getParams() {
      this.name = this.$route.query.name
      this.wristbandNum = this.$route.query.wristbandNum
    }
  },
  created() {
    this.getParams()
  }
}
