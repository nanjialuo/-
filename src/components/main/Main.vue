<template src="./main.html"></template>
<script src="./main.js">
</script>

<style lang='less' scoped src="./main.less">
</style>
<style lang="less">
#detectCatch {
  width: 10%;
  position: relative;
  .delete-img {
    width: 26px;
    height: 26px;
    position: absolute;
    right: 0;
    top: 0;
    background: url("../../assets/images/bodycheck/btn_照片删除.png");
    opacity: 0;
    z-index: 99;

    &:hover {
      background: url("../../assets/images/bodycheck/btn_照片删除hover.png");
    }
  }
}
.el-upload--picture-card {
  border-radius: 0;
}
.el-upload {
  display: block;
  // width: 140px;
  width: 100%;
  height: 134px;
  border: 1px solid #cde3f6;
  box-sizing: border-box;
  background-color: #f2f9ff;
  position: relative;
}

.sta-show {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #a8d1f5 url("../../assets/images/bodycheck/btn_添加照片.png")
    no-repeat center;
}
.hover-show {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 98px;
  width: 55%;
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

#detectCatch:hover .sta-show {
  display: none;
}

#detectCatch:hover .hover-show {
  display: block;
}
</style>

