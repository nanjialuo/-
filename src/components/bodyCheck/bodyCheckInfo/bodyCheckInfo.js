export default {
  data() {
    return {
      pinfo: {
        pname: '',
        pnumber: '',
        insperson: '',
        pdescription: ''
      },
      rules: {
        insperson: [{
          required: true,
          message: '请选择检查人员',
          trigger: 'change'
        }],
        pdescription: [{
          required: true,
          message: '请描述症状c',
          trigger: 'change'
        }]
      },
      // 上传图片
      imageUrl: '',
      imageUrl1: '',
      imageUrl2: '',
      imageUrl3: '',

      // 存储小圆点
      pointsArr: [],
      currentPoint: '0'
    };
  },
  methods: {
    // 上传图片
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    uploadBtnHide(e) {
      e.currentTarget.style.display = "none"
    },
    // 存储小圆点
    pointsCreat(e) {
      if (this.pointsArr.length > 4) {
        alert("最多添加5条标注");
        return;
      }
      var obj = {}
      obj.id = +new Date();
      // 当前小圆点
      this.currentPoint = obj.id
      obj.left = e.offsetX + 11 + 'px';
      if (e.currentTarget.className == "pimg-box-r") {
        obj.left = e.offsetX + 192 + 11 + 'px';
      }
      obj.top = e.offsetY + 22 + 'px';
      this.pointsArr.push(obj)      
    },
    // 小圆点高亮 
    listCheck(id) {
      this.currentPoint = id
    },
    // 删除
    listDelete(e, id) {
      if (e.currentTarget.className == 'del-inspect') {
        this.pointsArr = this.pointsArr.filter(item => item.id != id)
        this.currentPoint = this.pointsArr.length;
      }
    },
    // 签字&指纹  模态框
    clickShow(mclass, oclass) {
      document.querySelector(mclass).style.visibility = "visible";
      document.querySelector(oclass).style.visibility = "visible";
    },
    clickHide(mclass, oclass) {
      document.querySelector(mclass).style.visibility = "hidden";
      document.querySelector(oclass).style.visibility = "hidden";
    },
    // 上传图片
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      document.querySelector('#showImgbox .delete-img').style.opacity = "1"
      document.querySelector('#showImgbox .upload-btn').style.display = "none"
    },
    handleAvatarSuccess1(res, file) {
      this.imageUrl1 = URL.createObjectURL(file.raw);
      document.querySelector('#showImgbox1 .delete-img').style.opacity = "1"
      document.querySelector('#showImgbox1 .upload-btn').style.display = "none"
    },
    handleAvatarSuccess2(res, file) {
      this.imageUrl2 = URL.createObjectURL(file.raw);
      document.querySelector('#showImgbox2 .delete-img').style.opacity = "1"
      document.querySelector('#showImgbox2 .upload-btn').style.display = "none"
    },
    handleAvatarSuccess3(res, file) {
      this.imageUrl3 = URL.createObjectURL(file.raw);
      document.querySelector('#showImgbox3 .delete-img').style.opacity = "1"
      document.querySelector('#showImgbox3 .upload-btn').style.display = "none"
    },
    // 删除图片
    deleteUploadImg(id) {
      document.querySelector(id + " img").style.display = "none";
      document.querySelector(id + " .delete-img").style.opacity = "0";
      document.querySelector(id + " .upload-btn").style.display = "block";
    }
  },
  mounted() {
    // placeholder 兼容ie9
    function isPlaceholder() {
      var input = document.createElement('input');
      return 'placeholder' in input;
    }
    isPlaceholder();

    // 滚动条
    window.onscroll = (function () {
      var scroll = document.getElementById("body-checkinfo-scroll");
      var content = document.getElementById("body-checkinfo-content");
      var scrollBar = document.getElementById("body-checkinfo-scroll-bar");
      var bar = document.getElementById("body-checkinfo-bar");
      var scrollH = scroll.offsetHeight;
      var contentH = content.offsetHeight;
      // var contentW = content.offsetWidth;

      // 滚动条框 和框体的高度是一样的
      // scrollBar.style.height = scrollH + "px";
      // scrollBar.style.height = scrollH + "px";
      // 开始我想用right的,但是ie7 不兼容
      // scrollBar.style.left = scroll.offsetWidth - 26 + "px";
      // scrollBar.style.left = contentW - 130 + "px";
      // scrollBar.style.left = contentW + "px";
      // 滚动条的高度等于 框体高*(框体的高度比上内容的高度);
      // bar.style.height = scrollH * (scrollH / contentH) + 'px';
      var isMove = false; //是否开启滑动
      var oldY = 0; //滑动之前的老位置 初始化为0
      bar.onmousedown = function (event) {
        var event = event || window.event;
        oldY = event.clientY;
        isMove = true;
        return false;
      };
      document.onmouseup = function () {
        isMove = false;
        return false;
      };
      document.onmousemove = function (event) {
        var event = event || window.event;
        if (isMove) {
          // 滚动条变化的值 dirY
          var dirY = event.clientY - oldY;
          goOn(dirY);
          oldY = event.clientY;
        }
      };
      // 滚动事件
      scroll.onmousewheel = function (event) {
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
        content.style.marginTop = -bar.offsetTop / ((scrollH - 10) / contentH) + "px";
      }
    })();
  }
}
