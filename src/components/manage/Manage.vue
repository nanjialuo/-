<template>
  <div class="ban_container">
    <common-head></common-head>
    <div class="ban_show">
      <!-- 侧边栏 -->
      <div class="ban_aside aside-agreement-box" id="aside-scroll">
        <ul class="aside_menu" id="aside-content" ref="asideMenu">
          <li @click="currentShowMenu($event)">
            <a href="javascript:void(0);" @click="$router.push('/todo')">
              <span slot="title">
                <i class="iconfont icondaibanliucheng"></i>
                待办流程
              </span>
            </a>
          </li>
          <li @click="currentShowMenu($event)">
            <a href="javascript:void(0);">
              <span slot="title">
                <i class="iconfont iconchurudengji"></i>
                出入登记
              </span>
            </a>
          </li>
          <li @click="currentShowMenu($event)">
            <a href="javascript:void(0);" @click="$router.push('/check')">
              <span slot="title">
                <i class="iconfont iconrenshenjiancha"></i>
                人身检查
              </span>
            </a>
          </li>
          <li @click="currentShowMenu($event)">
            <a href="javascript:void(0);" @click="$router.push('/owns')">
              <span slot="title">
                <i class="iconfont iconsuishencaiwu"></i>
                随身财物
              </span>
            </a>
          </li>
          <li @click="currentShowMenu($event)">
            <a href="javascript:void(0);" @click="$router.push('/infoc')">
              <span slot="title">
                <i class="iconfont iconxinxicaiji"></i>
                信息采集
              </span>
            </a>
          </li>
          <li @click="currentShowMenu($event)">
            <a href="javascript:void(0);" @click="$router.push('/detect')">
              <span slot="title">
                <i class="iconfont iconxidujiance"></i>
                吸毒检测
              </span>
            </a>
          </li>
          <li @click="currentShowMenu($event)">
            <a href="javascript:void(0);" @click="$router.push('/prop')">
              <span slot="title">
                <i class="iconfont iconcaiwufanhuan"></i>
                财物返还
              </span>
            </a>
          </li>
          <li @click="currentShowMenu($event)">
            <a href="javascript:void(0);" @click="$router.push('/entry')">
              <span slot="title">
                <i class="iconfont iconruqujilu"></i>
                入区记录
              </span>
            </a>
          </li>
          <li @click="currentShowMenu($event)">
            <a href="javascript:void(0);" @click="$router.push('/ask')">
              <span slot="title">
                <i class="iconfont iconhouwenguanli"></i>
                侯问管理
              </span>
            </a>
          </li>
          <li @click="currentShowMenu($event)">
            <a href="javascript:void(0);">
              <span slot="title">
                <i class="iconfont iconcunchugui"></i>
                存 &nbsp;储&nbsp; 柜
              </span>
            </a>
          </li>
        </ul>
        <!-- 滚动条 -->
        <div id="aside-scroll-bar">
          <div id="aside-bar"></div>
        </div>
      </div>
      <!-- 主体 -->
      <div class="ban_main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.onscroll = (function() {
      var scroll = document.getElementById("aside-scroll");
      var content = document.getElementById("aside-content");
      var scrollBar = document.getElementById("aside-scroll-bar");
      var bar = document.getElementById("aside-bar");
      var scrollH = scroll.offsetHeight;
      var contentH = content.offsetHeight;

      // 滚动条框 和框体的高度是一样的
      // scrollBar.style.height = scrollH + "px";
      scrollBar.style.height = contentH + "px";
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
    currentShowMenu(e) {
     var lis = this.$refs.asideMenu.children
      for (let index = 0; index < lis.length; index++) {
        lis[index].className = ""   
      }
      e.currentTarget.className = 'currentAsideMenu'   
    }
  }
};
</script>

<style scoped lang="less">
.ban_container {
  height: 100%;
  min-width: 1440px;
}

.ban_show {
  position: relative;
  padding-left: 216px;
  height: 100%;

  .ban_main {
    padding: 34px;
    overflow: hidden;
    background-color: #f5f6fa;
    height: 100%;
  }

  .ban_aside {
    width: 216px;
    height: 100%;
    max-height: 1080px;
    min-height: 900px;
    position: absolute;
    left: 0;
    top: 0px;
    .aside_menu {
      padding-top: 30px;
      > li {
        height: 56px;
        line-height: 56px;

        a {
          color: #d0d0d0;
          display: block;
          padding-left: 90px;
          border-left: 4px solid transparent;
          position: relative;
          // background-color: #242839;

          > span i {
            width: 18px;
            height: 18px;
            position: absolute;
            left: 47px;
            top: 0px;
            // margin-left: 47px;
            margin-right: 24px;
          }
          &:hover {
            color: #fff;
            // border-left: 4px solid #4a75ff;
            // background-color: #373b4d;
          }
        }
      }
    }
  }
}

.aside-agreement-box {
  position: relative;
  overflow: hidden;
}

#aside-scroll-bar {
  position: absolute;
  width: 4px;
  left: 0;
  top: 0;
  border-radius: 4px;
  background-color: transparent;
}

#aside-bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 47px;
  background-color: transparent;
}
</style>
