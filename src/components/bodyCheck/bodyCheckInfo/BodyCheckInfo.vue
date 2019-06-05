<template src="./bodyCheckInfo.html"></template>

<script src="./bodyCheckInfo.js">
</script>

<style scoped lang="less" src="./bodyCheckInfo.less">
</style>
<style lang="less">
#showImgbox,
#showImgbox1,
#showImgbox2,
#showImgbox3 {
  width: 140px;
  width: 48%;
  height: 80px;
  float: left;
  margin-right: 2%;
  margin-bottom: 5px;
  position: relative;
  .delete-img {
    width: 26px;
    height: 26px;
    position: absolute;
    right: 0;
    top: 0;
    background: url("../../../assets/images/bodycheck/btn_照片删除.png");
    opacity: 0;

    &:hover {
      background: url("../../../assets/images/bodycheck/btn_照片删除hover.png");
    }
  }
}

.el-upload {
  display: block;
  // width: 140px;
  width: 100%;
  height: 80px !important;
  border: 1px solid #cde3f6;
  box-sizing: border-box;
  background-color: #f2f9ff;
  float: left;
  position: relative;

  &:hover {
    .hover-show {
      display: block;
      z-index: 1;
    }

    .sta-show {
      display: none;
    }
  }
  .sta-show {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #a8d1f5 url("../../../assets/images/bodycheck/btn_添加照片.png")
      no-repeat center;
  }
  .hover-show {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 98px;
    width: 70%;
    height: 26px;
    box-sizing: border-box;
    border-radius: 20px;
    overflow: hidden;
    display: none;

    > div {
      width: 49px;
      width: 50%;
      line-height: 26px;
      font-size: 12px;
      outline: none;
      color: #fff;
      float: left;
      text-align: center;
      box-sizing: border-box;
      background-color: #a8d1f5;

      &:hover {
        background-color: #4c84ff;
      }

      &.avatar-uploader-icon {
        background-color: #a8d1f5;
        float: right;
        &:hover {
          background-color: #4c84ff;
        }
      }
    }
  }
}

.cre-point {
  width: 22px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  border-radius: 50%;
  color: #000;
  font-size: 14px;
  box-sizing: border-box;
  padding-right: 2px;
  line-height: 21px;
  background-color: #fff;
  border: 1px solid #cfd5e3;
  position: absolute;

  &.current {
    color: #fff;
    background-color: #4c84ff;
  }
}
</style>

