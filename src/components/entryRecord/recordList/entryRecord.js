export default {
  data() {
    return {
      entryRecord: [{
        recordid: '1',
        wristbandNum: '0110',
        name: '张国强',
        relerecord: '沪01民初000000001号',
        recordNum: '0001号',
        entryTime: '2019年4月18日 09:48:40',
        leaveTime: '-',
        status: '0',
        operate: '',
      }, {
        recordid: '2',
        wristbandNum: '0110',
        name: '张国强',
        relerecord: '沪01民初000000001号',
        recordNum: '0001号',
        entryTime: '2019年4月18日 09:48:40',
        leaveTime: '-',
        status: '0',
        operate: '',
      }, {
        recordid: '3',
        wristbandNum: '0110',
        name: '张国强',
        relerecord: '沪01民初000000001号',
        recordNum: '0001号',
        entryTime: '2019年4月18日 09:48:40',
        leaveTime: '-',
        status: '0',
        operate: '',
      }],
      // 分页
      currentPage: 1, //初始页
      pagesize: 2, //    每页的数据,
    }
  },
  created() {
    this.handleUserList()
  },
  methods: {
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange(size) {
      this.pagesize = size;
      console.log(this.pagesize) //每页下拉显示数据
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage) //点击第几页
    },
    async handleUserList() {
      let res = await this.$axios.get("entryRecord");
      this.entryRecord = res.data;
    },
    // 条形码
    codePrint() {
      this.$message({
        message: '条形码打印成功',
        type: "success",
        duration: 800
      });
    },
    // 状态筛选 未出区
    async stayUserList(){
      let res = await this.$axios.get("entryRecord");
      this.entryRecord = res.data.filter(item => item.status == '0')
      
    },
     // 状态筛选 已出区
     async outUserList(){
      let res = await this.$axios.get("entryRecord");
      this.entryRecord = res.data.filter(item => item.status != '0')
    },
    // 筛选框颜色
    showCurrentSort(e, f) {
      var lis = document.querySelectorAll(f + ' li')
      for (let index = 0; index < lis.length; index++) {
        lis[index].className = ''
      }
      e.currentTarget.className = 'currentSort'
    },
    // 登记表
    toRecordTb(name, wristbandNum) {
        this.$router.push({
          path: '/rtable',
          query: {
            name: name,
            wristbandNum:wristbandNum
          }
        })
    },

    // 轨迹录像
    toRecordVedio(name, wristbandNum) {
        this.$router.push({
          path: '/rvedio',
          query: {
            name: name,
            wristbandNum:wristbandNum
          }
        })
    }
  }
}
