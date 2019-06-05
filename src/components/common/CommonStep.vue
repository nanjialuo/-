<template>
  <div class="stepbody">
    <div class="common-step">
      <ol class="steps" ref="commonSteps">
        <li class="step-success current-step">
          <div class="step-line"></div>
          <div class="step-content">
            <div class="step-img"></div>
            <div class="step-description">出入登记</div>
            <div class="step-icon iconfont iconchurudengji"></div>
          </div>
        </li>
        <li class="step-process">
          <div class="step-line"></div>
          <div class="step-content">
            <div class="step-img"></div>
            <div class="step-description">人身检查</div>
            <div class="step-icon iconfont iconrenshenjiancha"></div>
          </div>
        </li>
        <li>
          <div class="step-line"></div>
          <div class="step-content">
            <div class="step-img"></div>
            <div class="step-description step-text">随身财物</div>
            <div class="step-icon iconfont iconsuishencaiwu"></div>
          </div>
        </li>
        <li>
          <div class="step-line"></div>
          <div class="step-content">
            <div class="step-img"></div>
            <div class="step-description step-text">信息采集</div>
            <div class="step-icon iconfont iconxinxicaiji"></div>
          </div>
        </li>
        <li>
          <div class="step-line"></div>
          <div class="step-content">
            <div class="step-img"></div>
            <div class="step-description step-text">吸毒检测</div>
            <div class="step-icon iconfont iconxidujiance"></div>
          </div>
        </li>
        <li>
          <div class="step-line"></div>
          <div class="step-content">
            <div class="step-img"></div>
            <div class="step-description step-text">侯问管理</div>
            <div class="step-icon iconfont iconhouwenguanli"></div>
          </div>
        </li>
        <li>
          <div class="step-line"></div>
          <div class="step-content">
            <div class="step-img"></div>
            <div class="step-description step-text">财物返还</div>
            <div class="step-icon iconfont iconcaiwufanhuan"></div>
          </div>
        </li>
        <li class="step-end">
          <div class="step-line"></div>
          <div class="step-content">
            <div class="step-img"></div>
            <div class="step-description step-text">最终出区</div>
            <div class="step-icon iconfont iconzuizhongchuqu"></div>
          </div>
        </li>
      </ol>
    </div>
    <div class="common-right">
      <!-- 腕带扫描 -->
      <div class="right-head">
        <h4>腕带扫描</h4>
        <p>请把腕带放在读卡器上</p>
      </div>
      <!-- 搜索 -->
      <div class="right-search">
        <div class="search-head">
          <input type="text" placeholder="请输入关键字">
          <div class="search-btn"></div>
        </div>
        <div class="common-right-agreement-box" id="common-right-scroll">
          <ul class="search-list" id="common-right-content">
            <li>
              <a href="#">
                <!-- <img src="../../assets/images/bodycheck/ind_头像身份证.png" alt> -->
                <p>张国强</p>
              </a>
            </li>
            <li>
              <a href="#">
                <!-- <img src="../../assets/images/bodycheck/ind_头像身份证.png" alt> -->
                <p>张国强</p>
              </a>
            </li>
            <li>
              <a href="#">
                <!-- <img src="../../assets/images/bodycheck/ind_头像身份证.png" alt> -->
                <p>张国强</p>
              </a>
            </li>
            <li>
              <a href="#">
                <!-- <img src="../../assets/images/bodycheck/ind_头像身份证.png" alt> -->
                <p>张国强</p>
              </a>
            </li>
            <li>
              <a href="#">
                <!-- <img src="../../assets/images/bodycheck/ind_头像身份证.png" alt> -->
                <p>张国强</p>
              </a>
            </li>
            <li>
              <a href="#">
                <!-- <img src="../../assets/images/bodycheck/ind_头像身份证.png" alt> -->
                <p>张国强</p>
              </a>
            </li>
          </ul>
          <!-- 滚动条 -->
          <div id="common-right-scroll-bar">
            <div id="common-right-bar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    // 处理ie9的placeholder (调用)
    this.$nextTick(
      function() {
        function placeholderSupport() {
          return "placeholder" in document.createElement("input");
        }
        if (!placeholderSupport()) {
          // 判断浏览器是否支持 placeholder
          this.addplaceholder();
        }
      }.bind(this)
    );
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

    window.onscroll = (function() {
      var scroll = document.getElementById("common-right-scroll");
      var content = document.getElementById("common-right-content");
      var scrollBar = document.getElementById("common-right-scroll-bar");
      var bar = document.getElementById("common-right-bar");
      var scrollH = scroll.offsetHeight;
      var contentH = content.offsetHeight;
      var contentW = content.offsetWidth;

      // 滚动条框 和框体的高度是一样的
      // scrollBar.style.height = scrollH + "px";
      // scrollBar.style.height = scrollH * 0.6 + "px";
      // 开始我想用right的,但是ie7 不兼容
      // scrollBar.style.left = scroll.offsetWidth - 26 + "px";
      // scrollBar.style.left = contentW - 130 + "px";
      // scrollBar.style.left = contentW + "px";
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
      }
    })();
  },
  methods: {
    // 处理ie9的placeholder
    addplaceholder() {
      if ($("#modifypwd .placeholder").length > 0) {
        $(".placeholder").remove();
      }
      $("[placeholder]")
        .each(function() {
          var _this = $(this);
          var left = _this.css("padding-left");
          _this
            .parent()
            .append(
              '<span class="placeholder" data-type="placeholder" style="left: ' +
                left +
                ";top: " +
                "13px" +
                '">' +
                _this.attr("placeholder") +
                "</span>"
            );
          if (_this.val() != "") {
            _this
              .parent()
              .find("span.placeholder")
              .hide();
          } else {
            _this
              .parent()
              .find("span.placeholder")
              .show();
          }
        })
        .on("focus", function() {
          $(this)
            .parent()
            .find("span.placeholder")
            .hide();
        })
        .on("blur", function() {
          var _this = $(this);
          if (_this.val() != "") {
            _this
              .parent()
              .find("span.placeholder")
              .hide();
          } else {
            _this
              .parent()
              .find("span.placeholder")
              .show();
          }
        });
      // 点击表示placeholder的标签相当于触发input
      $("span.placeholder").on("click", function() {
        $(this).hide();
        $(this)
          .siblings("[placeholder]")
          .trigger("click");
        $(this)
          .siblings("[placeholder]")
          .trigger("focus");
      });
    }
  }
};
</script>

<style scoped lang="less">
@totalW: 778+858px;
.stepbody {
  // width: 778+858px;
  width: 100%;
  height: 754px;
  position: relative;
  border: 1px solid #dadbe4;
  box-sizing: border-box;
  // margin: 34px;
}

ol.steps::-webkit-scrollbar {
  /* chrome 隐藏滚动条*/
  display: none;
}

ol.steps {
  width: 1300px / @totalW * 100%;
  height: 90px;
  position: absolute;
  top: 85px;
  left: 0px;
  list-style: none;
  overflow-x: auto;
  padding-top: 30px;
  padding-left: 8%;
  box-sizing: border-box;
}

ol.steps:after,
ol.steps li:after {
  content: "";
  display: block;
  clear: both;
}

ol.steps li {
  float: left;
  position: relative;
  width: 12.5%;
  // min-width: 146px;
}

ol.steps li .step-line {
  height: 2px;
  background-color: #e8eaec;
  margin-top: 11px;
  width: 90%;
}

ol.steps li.current-step .step-line {
  background: linear-gradient(to right, #afbdda, #4d84ff);
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#afbdda, endColorstr=#4d84ff);
}

ol.steps .step-content {
  position: absolute;
  top: 0;
  left: -40px;
  left: -50%;
  transform: translateX(18%);
  text-align: center;
  color: #c3c3c3;
  font-size: 16px;
  width: 65%;
  font-size: 14px;
}

ol.steps .step-content .step-icon {
  height: 30px;
  position: absolute;
  top: -26px;
  left: 50%;
  transform: translateX(-50%);
}

ol.steps li .step-content .step-img {
  display: inline-block;
  height: 26px;
  width: 26px;
  background: url("../../assets/images/bodycheck/ind_流程未完成.png");
  text-align: center;
}

ol.steps li.step-success .step-content {
  color: #717b91;
}

ol.steps li.step-process .step-content {
  color: #4d84ff;
}

ol.steps li.step-process .step-content .step-img {
  background: url("../../assets/images/bodycheck/ind_流程进行中.png");
}

ol.steps li.step-success .step-content .step-img {
  background: url("../../assets/images/bodycheck/ind_流程完成.png");
}

ol.steps li.step-end .step-line {
  display: none;
}

.common-right {
  width: 336px / @totalW * 100%;
  height: 754px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fafafc;
  border-left: 1px solid #dadbe4;
  box-sizing: border-box;
  padding: 30px / @totalW * 100%;

  /* 腕带扫描 */
  .right-head {
    width: 100%;
    height: 98px;
    border: 1px solid #dadbe4;
    padding-top: 14px;
    background: url("../../assets/images/bodycheck/ind_腕带扫描s.png") no-repeat
      right center;
    background-color: #fff;

    > h4 {
      margin-top: 18px;
      font-weight: normal;
      font-size: 18px;
      margin-left: 18px;
      font-family: "微软雅黑";
      margin-bottom: 8px;
    }

    > p {
      color: #a8acb8;
      padding-left: 18px;
    }
  }

  // 搜索
  .right-search {
    .search-head {
      position: relative;

      > input {
        height: 48px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 6px;
        line-height: 48px;
        border: none;
        border-bottom: 1px solid #dadbe4;
        margin-bottom: 16px;
        background-color: #fafafc;
      }

      input::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #a8acb8;
      }

      input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #a8acb8;
      }

      input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #a8acb8;
      }

      input:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #a8acb8;
      }
      .search-btn {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 0;
        top: 12px;
        background: url("../../assets/images/bodycheck/btn_输入框搜索.png");
      }
    }

    .search-list {
      // margin-top: 16px;
      width: 100%;
      box-sizing: border-box;
      // height: 525px;
      overflow: hidden;

      > li {
        float: left;
        width: 46%;
        height: 175px;
        border: 1px solid #cfd5e3;
        padding-top: 145px;
        box-sizing: border-box;
        margin-right: 4%;
        margin-bottom: 16px;
        border-radius: 2px;
        position: relative;
        background: url("../../assets/images/bodycheck/ind_头像身份证.png")
          no-repeat center 16px;

        &:nth-child(2),
        &:nth-child(4),
        &:nth-child(6) {
          margin-right: 0px;
        }
        > a {
          display: block;
          width: 100%;
          height: 100%;
          color: #000;
          text-align: center;
        }
      }
    }
  }
}

// 滚动条配置
.common-right-agreement-box {
  width: 100%;
  // padding-right: 29px;
  position: relative;
  height: 525px;
  // width: 100%;
  // padding-right: 40px;
  overflow: hidden;
}

#common-right-scroll-bar {
  position: absolute;
  width: 4px;
  height: 323px;
  right: 0;
  top: 0px;
  background-color: transparent;
}

#common-right-bar {
  position: absolute;
  left: 0px;
  top: 0;
  width: 4px;
  height: 114px;
  border-radius: 2.5px;
  background-color: #adb0be;
}

@media screen and (max-width: 1440px) {
  .common-right .right-search .search-list > li {
    height: 141px;
    background: url("../../assets/images/bodycheck/ind_头像身份证_s.png")
      no-repeat center 16px;
    padding-top: 114px;
    font-size: 14px;
  }

  #common-right-scroll-bar {
    height: 292px;
  }
}
</style>