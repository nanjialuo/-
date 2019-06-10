<template>
  <div class="headnav" ref="headnav">
    <ul class="nav-list" ref="navList">
      <li @click="showCurrentNav($event)">
        <a href="#">总览</a>
      </li>
      <li @click="showCurrentNav($event)">
        <a href="#">首页</a>
      </li>
      <li @click="showCurrentNav($event)" class="currentHeadNav">
        <a href="javascript:void(0);" @click="$router.push('/todo')">办案区管理</a>
      </li>
      <li @click="showCurrentNav($event)">
        <a href="#">智能审讯</a>
      </li>
      <li @click="showCurrentNav($event)">
        <a href="#">督导指挥</a>
      </li>
      <li @click="showCurrentNav($event)">
        <a href="#">智能安防</a>
      </li>
      <li @click="showCurrentNav($event)">
        <a href="#">运维统计</a>
      </li>
      <li @click="showCurrentNav($event)">
        <a href="#">配置管理</a>
      </li>
    </ul>
    <div>
      <el-carousel height="48px" indicator-position="none">
        <el-carousel-item v-for="(item,index) in attentions" :key="index" arrow="nerver">
          <p class="small">{{ item }}</p>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attentions: [
        "[告警信息]涉案人员王大治不在1号楼办案区的监控范围内，请各区域民警提高警惕！（2019/05/11）",
        "222",
        "333",
        "444"
      ]
    };
  },
//   created(){
//       this.loloadAttentions()
//   },
  methods: {
    //  获取警告信息
    // async loadAttentions() {
    //   let res = await this.$axios.get("/");
    //   this.attentions = res.data;
    // },
    // 点击显示颜色
    showCurrentNav(e) {
      var lis = this.$refs.navList.children;
      for (let index = 0; index < lis.length; index++) {
        lis[index].className = "";
      }
      e.currentTarget.className = "currentHeadNav";
    }
  }
};
</script>

<style scoped lang="less">
@totalW: 1920px;
.headnav {
  width: 100%;
  height: 48px;
  line-height: 48px;
  position: relative;

  .nav-list {
    > li {
      float: left;

      > a {
        display: block;
        width: 108px;
        height: 100%;
        color: #fff;
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
</style>
<style lang="less">
.el-carousel__container {
  right: -400px;

  > button {
    width: 0;
    height: 0;
    color: transparent;
  }
}
.el-carousel__item {
  > p {
    color: #fab251;
    font-size: 14px;
    line-height: 48px;
    margin: 0;
    padding-left: 23px;
    background: url("../../assets/images/head/ind_报警.png") no-repeat left
      center;
  }
}

@media screen and (max-width: 1440px) {
  .el-carousel__item > p {
    font-size: 12px;
  }
}
</style>
