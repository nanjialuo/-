export default {
  data() {
    return {
      checklist:[
        {id:1,
          name:'张国强',
          personid:'310104199901027554',
          case:'沪000000012211',
          casenum:'123456',
          mainpolice:'张三',
          subpolice:'李四'
        }
      ]
    };
  },
  created() {
     // 处理ie9的placeholder (调用)
    this.$nextTick(function () {
      function placeholderSupport() {
        return 'placeholder' in document.createElement('input');
      }
      if (!placeholderSupport()) { // 判断浏览器是否支持 placeholder
        this.addplaceholder();
      }
    }.bind(this));
  
},
    mounted() {
        
      window.onscroll = (function() {
        var scroll = document.getElementById("checkin-scroll");
        var content = document.getElementById("checkin-content");
        var scrollBar = document.getElementById("checkin-scroll-bar");
        var bar = document.getElementById("checkin-bar");
        var scrollH = scroll.offsetHeight;
        var contentH = content.offsetHeight;
        // console.log(scrollH, contentH);
        // console.log(111);
        
  
        // 滚动条框 和框体的高度是一样的
        // scrollBar.style.height = scrollH + "px";
        // scrollBar.style.height = contentH + "px";
        // 开始我想用right的,但是ie7 不兼容
        // scrollBar.style.left = scroll.offsetWidth - 26 + "px";
        // 滚动条的高度等于 框体高*(框体的高度比上内容的高度);
        // bar.style.height = scrollH * (scrollH / contentH) + 'px';
        var isMove = false; //是否开启滑动
        var oldY = 0; //滑动之前的老位置 初始化为0
        bar.onmousedown = function(event) {
          var event = event || window.event;
          oldY = event.clientY;
          isMove = true;
          return false;
        };
        document.onmouseup = function() {
          isMove = false;
          return false;
        };
        document.onmousemove = function(event) {
          var event = event || window.event;
          if (isMove) {
            // 滚动条变化的值 dirY
            var dirY = event.clientY - oldY;
            goOn(dirY);
            oldY = event.clientY;
          }
        };
        // 滚动事件
        scroll.onmousewheel = function(event) {
          var event = event || window.event;
          // event.wheelDelta 每次滚动都是+-120  这里设置一个系数 120 太大了更适合浏览器的滚动
          goOn(-event.wheelDelta * 0.2);
          return false;
        };
  
        function goOn(dirY) {
          // 滚动条滚动
          bar.style.marginTop = bar.offsetTop + dirY + "px";
          // console.log(bar.style.marginTop);
          
          // 越界处理
          if (bar.offsetTop < 0) {
            bar.style.marginTop = "0px";
          }
          if (bar.offsetTop + bar.offsetHeight > scrollBar.offsetHeight) {
            bar.style.marginTop =
              scrollBar.offsetHeight - bar.offsetHeight + "px";
          }
          // 内容框的margin-top
          content.style.marginTop =
            -bar.offsetTop / ((scrollH - 10) / contentH) + "px";
          // console.log(content.style.marginTop, bar.style.marginTop);
        }
      })();
    },
    methods: {
      clickShow() {
        var model = document.getElementById("mymodel");
        var overlay = document.getElementsByClassName("model-overlay")[0];
        model.style.visibility = "visible";
        overlay.style.visibility = "visible";
      },
      clickHide() {
        var model = document.getElementById("mymodel");
        var overlay = document.getElementsByClassName("model-overlay")[0];
        model.style.visibility = "hidden";
        overlay.style.visibility = "hidden";
      },

      // 处理ie9的placeholder
      addplaceholder() {
        if ($("#modifypwd .placeholder").length > 0) {
          $('.placeholder').remove();
        }
        $("[placeholder]").each(function () {
          var _this = $(this);
          var left = _this.css("padding-left");
          _this.parent().append('<span class="placeholder" data-type="placeholder" style="left: ' + left + ';top: ' + '9px' + '">' + _this.attr("placeholder") + '</span>');
          if (_this.val() != "") {
            _this.parent().find("span.placeholder").hide();
          } else {
            _this.parent().find("span.placeholder").show();
          }
        }).on("focus", function () {
          $(this).parent().find("span.placeholder").hide();
        }).on("blur", function () {
          var _this = $(this);
          if (_this.val() != "") {
            _this.parent().find("span.placeholder").hide();
          } else {
            _this.parent().find("span.placeholder").show();
          }
        });
        // 点击表示placeholder的标签相当于触发input
        $("span.placeholder").on("click", function () {
          $(this).hide();
          $(this).siblings("[placeholder]").trigger("click");
          $(this).siblings("[placeholder]").trigger("focus");
        });
      }
    }
  };