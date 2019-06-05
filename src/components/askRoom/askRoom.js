export default {
    data() {
        return {
          // 侯问室列表
          greetingRoomList: [
              {"name":"侯问室1", "status":0},
              {"name":"侯问室2", "status":0},
              {"name":"侯问室3", "status":1, "current":7},
              {"name":"侯问室4", "status":0},
              {"name":"侯问室5", "status":1, "current":9}  
            ],
            greetingFree:[],
            greetingBusy:[],
            // 审讯室列表
            askingRoomList: [
              {"name":"侯问室1", "status":0},
              {"name":"侯问室2", "status":0},
              {"name":"侯问室3", "status":1, "current":1},
              {"name":"侯问室4", "status":0},
              {"name":"侯问室5", "status":1, "current":1},
              {"name":"侯问室6", "status":0},
              {"name":"侯问室7", "status":0},
              {"name":"侯问室8", "status":0},
              {"name":"侯问室9", "status":1, "current":1},
              {"name":"侯问室10", "status":0}
            ],
            askingFree:[],
            askingBusy:[],
        };
      },
      created() {
        this.greetingFree = this.greetingRoomList.filter(item=>item.status==0)
        this.greetingBusy = this.greetingRoomList.filter(item=>item.status==1)
        this.askingFree = this.askingRoomList.filter(item=>item.status==0)
        this.askingBusy = this.askingRoomList.filter(item=>item.status==1)          
      }
}
