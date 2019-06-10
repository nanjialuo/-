export default {
  data() {
    return {
      // 流程数据
      activities: [{
          name: "龚勇",
          timestamp: "20:46",
          number: "000000123",
          sex:'male',
          // 实时照片
          // currentImg:'',
          // 身份证照片
          // cardImg:'',
          // 是否是固化流程
          // static:'ture'
          process: [{
              proName: "入区登记",
              done: true,
              proId: 0
            },
            {
              proName: "人身检查",
              done: "false",
              proId: 1
            },
            {
              proName: "随身财物",
              done: true,
              proId: 2
            },
            {
              proName: "信息采集",
              done: "false",
              proId: 3
            },
            {
              proName: "吸毒检测",
              done: "done",
              proId: 4
            },
            {
              proName: "侯问管理",
              done: "false",
              proId: 5
            },
            {
              proName: "财物返还",
              done: "false",
              proId: 6
            },
            {
              proName: "临时出区",
              done: "false",
              proId: 7
            },
            {
              proName: "最终出区",
              done: "false",
              proId: 8
            }
          ]
        },
        {
          name: "张三",
          timestamp: "15:32",
          number: "000000143",
          process: [{
              proName: "入区登记",
              done: true,
              proId: 0
            },
            {
              proName: "人身检查",
              done: "false",
              proId: 1
            },
            {
              proName: "随身财物",
              done: true,
              proId: 2
            },
            {
              proName: "信息采集",
              done: "false",
              proId: 3
            },
            {
              proName: "吸毒检测",
              done: "done",
              proId: 4
            },
            {
              proName: "侯问管理",
              done: "false",
              proId: 5
            },
            {
              proName: "财物返还",
              done: "false",
              proId: 6
            },
            {
              proName: "临时出区",
              done: "false",
              proId: 7
            },
            {
              proName: "最终出区",
              done: "false",
              proId: 8
            }
          ]
        },
        {
          name: "李四",
          timestamp: "13:11",
          number: "000000153",
          process: [{
              proName: "入区登记",
              done: true,
              proId: 0
            },
            {
              proName: "人身检查",
              done: "false",
              proId: 1
            },
            {
              proName: "随身财物",
              done: true,
              proId: 2
            },
            {
              proName: "信息采集",
              done: "false",
              proId: 3
            },
            {
              proName: "吸毒检测",
              done: "done",
              proId: 4
            },
            {
              proName: "侯问管理",
              done: "false",
              proId: 5
            },
            {
              proName: "财物返还",
              done: "false",
              proId: 6
            },
            {
              proName: "临时出区",
              done: "false",
              proId: 7
            },
            {
              proName: "最终出区",
              done: "false",
              proId: 8
            }
          ]
        },
        {
          name: "王五",
          timestamp: "11:23",
          number: "000000113",
          process: [{
              proName: "入区登记",
              done: true,
              proId: 0
            },
            {
              proName: "人身检查",
              done: "false",
              proId: 1
            },
            {
              proName: "随身财物",
              done: true,
              proId: 2
            },
            {
              proName: "信息采集",
              done: "false",
              proId: 3
            },
            {
              proName: "吸毒检测",
              done: "done",
              proId: 4
            },
            {
              proName: "侯问管理",
              done: "false",
              proId: 5
            },
            {
              proName: "财物返还",
              done: "false",
              proId: 6
            },
            {
              proName: "临时出区",
              done: "false",
              proId: 7
            },
            {
              proName: "最终出区",
              done: "false",
              proId: 8
            }
          ]
        },
        {
          name: "赵六",
          timestamp: "08:46",
          number: "000000111",
          process: [{
              proName: "入区登记",
              done: true,
              proId: 0
            },
            {
              proName: "人身检查",
              done: false,
              proId: 1
            },
            {
              proName: "随身财物",
              done: true,
              proId: 2
            },
            {
              proName: "信息采集",
              done: false,
              proId: 3
            },
            {
              proName: "吸毒检测",
              done: true,
              proId: 4
            },
            {
              proName: "侯问管理",
              done: false,
              proId: 5
            },
            {
              proName: "财物返还",
              done: false,
              proId: 6
            },
            {
              proName: "临时出区",
              done: false,
              proId: 7
            },
            {
              proName: "最终出区",
              done: false,
              proId: 8
            }
          ]
        }
      ],
      screenWidth: document.body.clientWidth,
      currentTime: "2019年1月14日"
    };
  },

  created() {
    this.loadTodoProList();
  },

  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };

    window.onscroll = function () {
      var scroll = document.getElementById("todopro-scroll");
      var content = document.getElementById("todopro-content");
      var scrollBar = document.getElementById("todopro-scroll-bar");
      var bar = document.getElementById("todopro-bar");
      var scrollH = scroll.offsetHeight;
      var scrollW = scroll.offsetWidth;
      var contentH = content.offsetHeight;
      var contentW = content.offsetWidth;

      // 滚动条框 和框体的高度是一样的
      // scrollBar.style.height = scrollH + "px";
      scrollBar.style.height = scrollH * 0.6 + "px";
      // 开始我想用right的,但是ie7 不兼容
      // scrollBar.style.left = scroll.offsetWidth - 26 + "px";
      // scrollBar.style.left = contentW - 130 + "px";
      scrollBar.style.left = contentW + content.offsetLeft + 5 + "px";
      // 滚动条的高度等于 框体高*(框体的高度比上内容的高度);
      // bar.style.height = scrollH * (scrollH / contentH) + 'px';
      var isMove = false; //是否开启滑动
      var oldY = 0; //滑动之前的老位置 初始化为0
      bar.onmousedown = function (event) {
        var event = event || window.event;
        oldY = event.clientY;
        isMove = true;
        return false;
      }
      document.onmouseup = function () {
        isMove = false;
        return false;
      }
      document.onmousemove = function (event) {
        var event = event || window.event;
        if (isMove) {
          // 滚动条变化的值 dirY
          var dirY = event.clientY - oldY;
          goOn(dirY);
          oldY = event.clientY;
        }
      }
      // 滚动事件
      scroll.onmousewheel = function (event) {
        var event = event || window.event;
        // event.wheelDelta 每次滚动都是+-120  这里设置一个系数 120 太大了更适合浏览器的滚动
        goOn(-event.wheelDelta * 0.2);
        return false;
      }

      function goOn(dirY) {
        // 滚动条滚动
        bar.style.marginTop = bar.offsetTop + dirY + 'px';
        // 越界处理
        if (bar.offsetTop < 0) {
          bar.style.marginTop = "0px";
        }
        if ((bar.offsetTop + bar.offsetHeight) > scrollBar.offsetHeight) {
          bar.style.marginTop = scrollBar.offsetHeight - bar.offsetHeight + 'px';
        }
        // 内容框的margin-top
        content.style.marginTop = -bar.offsetTop / ((scrollH - 10) / contentH) + "px";
      }
    }()
  },

  methods: {
    async loadTodoProList() {
      let res = await this.$axios.get("todoProList");
      // console.log(res);
      this.activities = res.data;
    },

    // 流程跳转
    toOtherPro(m,i) {
      if (i == 1) {
        // 判断是否为固化流程
        // if(m) {
        //   this.$message({
        //     message: '请先进行<固化流程应做流程>',
        //     type: "info",
        //     duration: 800
        //   });
        //   return;
        // }
        this.$router.push('/info')
      } else if (i == 2) {
        this.$router.push('/ownf')
      } else if (i == 3) {
        this.$router.push('/infod')
      } else if (i == 4) {
        this.$router.push('/detectd')
      } else if (i == 5) {
        this.$router.push('/ask')
      } else if (i == 6) {
        this.$router.push('/propd')
      }
    }
  },
  filters: {
    formatDate: function () {
      let date = new Date();
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "年" + MM + "月" + d + "日";
    }
  }
};
