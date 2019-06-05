<template src="./propertyDetail.html"></template>

<script src="./propertyDetail.js">
</script>

<style scoped lang="less" src="./propertyDetail.less">
</style>
<style lang="less">
#detectCatch {
 height: 134px;
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
.el-upload--picture-card {
  border-radius: 0;
}
 #detectCatch .el-upload {
  display: block;
  width: 100%;
  height: 134px !important;
  border: 1px solid #cde3f6;
  box-sizing: border-box;
  background-color: #f2f9ff;
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
    width: 50%;
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

.el-table {
  color: #000;
}
.el-table thead {
  color: #000;
  font-weight: 400;
  font-size: 14px;
  border-color: #dadbe4;
}

.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #dadbe4;
}

.el-table__header tr,
.el-table__header th {
  padding: 0;
  height: 50px;
}
.el-table__body tr,
.el-table__body td {
  padding: 0;
  height: 58px;
}

.el-table__row:last-child {
  border-bottom: none;
}
</style>

