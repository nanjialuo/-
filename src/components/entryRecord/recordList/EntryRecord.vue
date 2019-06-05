<template src="./entryRecord.html"></template>

<script src="./entryRecord.js">
export default {};
</script>

<style scoped lang="less" src="./entryRecord.less">
</style>
<style lang="less">
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
.el-message {
  width: 200px;
  min-width: 200px;
  border-color: #fff;
  padding-left: 35px;
  position: absolute;
  top: 132px;
  background-color: #fff;
  box-shadow:1px 1px 7px rgba(0, 0, 0, .9)
}

.el-message--success .el-message__content{
  color: #000;
}
</style>


