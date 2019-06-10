<template>
  <div class="header" ref="header">
    <div class="header-left">
      <div class="head-img"></div>
      <h1>办案区智能管控平台</h1>
    </div>
    <div class="header-right">
      <div class="head-location iconfont iconbiaoji">江苏</div>
      <!--换肤 -->
      <div class="change-style iconfont iconpifu">
        <div :class="{'style-choice':true, 'changeStyleShow':changeStyleShow}">
          <div class="skin-style">
            <span>皮肤</span>
            <ul class="choose-skin-color" ref="chooseSkinColor">
              <li
                v-for="(item, index) in skinStyleChoice"
                :key="index"
                @click="changeStyleEnsure($event, index)"
                :style="{backgroundColor:item}"
              ></li>
            </ul>
          </div>
          <div class="aside-style">
            <span>侧栏</span>
            <ul class="choose-aside-color" ref="chooseAsideColor">
              <li
                v-for="(item, index) in asideStyleChoice"
                :key="index"
                @click="changeAsideStyleEnsure($event, index)"
                :style="{backgroundColor:item}"
              ></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="head-tips iconfont iconqipao">
        <div class="head-fr-point">1</div>
      </div>
      <div class="head-download iconfont iconxiazai">
        <div class="head-fr-point">3</div>
      </div>
      <div class="login-role iconfont iconrenyuan">
        王仁鑫
        <ul :class="{'role-rights':true, 'showList':roleListShow}">
          <li>
            <a href="#">修改密码</a>
          </li>
          <li>
            <a href="#">关于我们</a>
          </li>
          <li>
            <a href="#">帮助文档</a>
          </li>
          <li>
            <a href="#">注销系统</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleListShow: false,
      changeStyleShow: false,
      currentSkinStyle: 0,
      skinStyleChoice: [
        "#5274f8",
        "#55a5ea",
        "#4a4747",
        "#158835",
        "#ed7d25",
        "#b01f2c"
      ],
      asideStyleChoice: ["#3b4967", "#d0d5e8"],
      attentions: [
        "[告警信息]涉案人员王大治不在1号楼办案区的监控范围内，请各区域民警提高警惕！（2019/05/11）",
        "222",
        "333",
        "444"
      ]
    };
  },
  methods: {
    // // 人员下拉框
    // roleListToggle() {
    //   this.roleListShow = !this.roleListShow;
    // },
    // // 皮肤框
    // changeStyleToggle() {
    //   this.changeStyleShow = !this.changeStyleShow;
    // },
    // 皮肤小圆点
    changeStyleEnsure(e, i) {
      for (let i = 0; i < this.$refs.chooseSkinColor.children.length; i++) {
        this.$refs.chooseSkinColor.children[i].className = "";
      }
      // 清空侧边栏小圆点
      for (let i = 0; i < this.$refs.chooseAsideColor.children.length; i++) {
        this.$refs.chooseAsideColor.children[i].className = "";
      }
      e.currentTarget.className = "iconfont iconqueren1";
      this.currentSkinStyle = i;
    },
    // 点击显示颜色
    showCurrentNav(e) {
      var lis = this.$refs.navList.children;
      for (let index = 0; index < lis.length; index++) {
        lis[index].className = "";
      }
      e.currentTarget.className = "currentHeadNav";
    },
    // 侧边栏小圆点
    changeAsideStyleEnsure(e, i) {
      var changeStyle = document.querySelector("#changeStyle");
      for (let i = 0; i < this.$refs.chooseAsideColor.children.length; i++) {
        this.$refs.chooseAsideColor.children[i].className = "";
      }
      e.currentTarget.className = "iconfont iconqueren1";
      if (this.currentSkinStyle == 0 && i == 0) {
        changeStyle.setAttribute("href", "./static/theme/basic/dark.css");
        localStorage.setItem("currentStyle", "./static/theme/basic/dark.css");
      } else if (this.currentSkinStyle == 0 && i == 1) {
        changeStyle.setAttribute("href", "./static/theme/basic/light.css");
        localStorage.setItem("currentStyle", "./static/theme/basic/light.css");
      } else if (this.currentSkinStyle == 1 && i == 0) {
        changeStyle.setAttribute("href", "./static/theme/blue/dark.css");
        localStorage.setItem("currentStyle", "./static/theme/blue/dark.css");
      } else if (this.currentSkinStyle == 1 && i == 1) {
        changeStyle.setAttribute("href", "./static/theme/blue/light.css");
        localStorage.setItem("currentStyle", "./static/theme/blue/light.css");
      } else if (this.currentSkinStyle == 2 && i == 0) {
        changeStyle.setAttribute("href", "./static/theme/black/dark.css");
        localStorage.setItem("currentStyle", "./static/theme/black/dark.css");
      } else if (this.currentSkinStyle == 2 && i == 1) {
        changeStyle.setAttribute("href", "./static/theme/black/light.css");
        localStorage.setItem("currentStyle", "./static/theme/black/light.css");
      } else if (this.currentSkinStyle == 3 && i == 0) {
        changeStyle.setAttribute("href", "./static/theme/green/dark.css");
        localStorage.setItem("currentStyle", "./static/theme/green/dark.css");
      } else if (this.currentSkinStyle == 3 && i == 1) {
        changeStyle.setAttribute("href", "./static/theme/green/light.css");
        localStorage.setItem("currentStyle", "./static/theme/green/light.css");
      } else if (this.currentSkinStyle == 4 && i == 0) {
        changeStyle.setAttribute("href", "./static/theme/orange/dark.css");
        localStorage.setItem("currentStyle", "./static/theme/orange/dark.css");
      } else if (this.currentSkinStyle == 4 && i == 1) {
        changeStyle.setAttribute("href", "./static/theme/orange/light.css");
        localStorage.setItem("currentStyle", "./static/theme/orange/light.css");
      } else if (this.currentSkinStyle == 5 && i == 0) {
        changeStyle.setAttribute("href", "./static/theme/red/dark.css");
        localStorage.setItem("currentStyle", "./static/theme/red/dark.css");
      } else {
        changeStyle.setAttribute("href", "./static/theme/red/light.css");
        localStorage.setItem("currentStyle", "./static/theme/red/light.css");
      }
    }
  },
  created() {
    // 换肤
    var currentStyle = localStorage.getItem("currentStyle");
    if (currentStyle) {
      document.querySelector("#changeStyle").setAttribute("href", currentStyle);
    }
  }
};
</script>

<style scoped lang="less">
@totalW: 1920px;
.header {
  // width: 1920px;
  width: 100%;
  min-width: 1440px;
  height: 78px;
  line-height: 78px;
  padding-left: 375px;
  color: #fff;
  // background: linear-gradient(to right, #536cf5, #507ffc);
  font-size: 16px;
  box-sizing: border-box;
  position: relative;
  .head-fr-point {
    width: 16px;
    height: 16px;
    background-color: #fd5926;
    position: absolute;
    left: 50%;
    top: 25px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    border-radius: 50%;
  }

  .header-left {
    width: 375px;
    padding-left: 86px;
    position: absolute;
    left: 0;
    top: 0;
    .head-img {
      width: 35px;
      height: 38px;
      background: url("../../assets/images/head/login_检察院.png");
      position: absolute;
      left: 40px;
      top: 20px;
    }
  }
  .header-right {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .head-location {
    width: 48px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 270px;
    font-size: 16px;
    cursor: pointer;
  }

  .change-style {
    position: absolute;
    right: 223px;
    top: 0;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      .style-choice {
        display: block;
      }
    }

    .style-choice {
      width: 195px;
      height: 140px;
      background-color: #fff;
      position: absolute;
      left: -65px;
      top: 60px;
      z-index: 999;
      box-sizing: border-box;
      border-radius: 5px;
      border: 1px solid #dadbe4;
      padding: 20px;
      display: none;

      &.changeStyleShow {
        display: block;
      }

      .skin-style {
        width: 140px;
        height: 55px;
        line-height: 14px;
        color: #000;
        position: relative;
        > span {
          font-size: 14px;
        }

        .choose-skin-color {
          width: 108px;
          position: absolute;
          right: 0;
          top: 0;

          > li {
            float: left;
            width: 18px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            border-radius: 50%;
            margin-left: 16px;
            margin-bottom: 14px;
            color: #fff;
          }
        }
      }
      .aside-style {
        margin-top: 27px;
        line-height: 20px;
        width: 140px;
        height: 20px;
        color: #000;
        position: relative;

        > span {
          font-size: 14px;
        }

        .choose-aside-color {
          width: 108px;
          position: absolute;
          right: 0;
          top: 3px;
          > li {
            float: left;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            margin-left: 16px;
            color: #fff;
          }
        }
      }
    }
  }

  .head-tips {
    // width: 23px;
    height: 100%;
    position: absolute;
    right: 175px;
    top: 0;
    cursor: pointer;
    font-size: 20px;
  }

  .head-download {
    // width: 22px;
    font-size: 20px;
    height: 100%;
    position: absolute;
    right: 127px;
    top: 0;
    cursor: pointer;
  }

  .login-role {
    position: absolute;
    right: 35px;
    top: 0;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      .role-rights {
        display: block;
      }
    }

    .role-rights {
      width: 96px;
      height: 144px;
      padding-top: 10px;
      position: absolute;
      left: -15px;
      top: 60px;
      background-color: #ffffff;
      border: 1px solid #dadbe4;
      box-sizing: border-box;
      border-radius: 5px;
      display: none;
      z-index: 999;
      font-size: 14px;

      &.showList {
        display: block;
      }

      > li {
        height: 30px;
        line-height: 30px;
        text-align: center;
        &:hover {
          background-color: #f3f3f3;
        }

        > a {
          color: #000;
        }
      }
    }
  }
}
</style>
