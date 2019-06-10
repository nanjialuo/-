export default {
  data() {
    return {
      pinfo: {
        pname: '',
        pnumber: '',
        psavebox: '',
        pphoto:''
      },
      // 待定列表数据
      pownslist: [{
        id: 1,
        goodsname: '手机',
        goodsnum: [1, 2, 3],
        goodsunit: '台',
        goodsbox: ['储物柜', '保险柜', '前台'],
        goodslevel: ['高', '中', '低'],
        goodsdes: '',
        goodsimgbox: ''
      }],
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
      pownslist: [1, 2],
      // 添加 基础项（缺id)
      baseList: {
        goodsname: '手机',
        goodsnum: [1, 2, 3],
        goodsunit: '台',
        goodsbox: ['储物柜', '保险柜', '前台'],
        goodslevel: ['高', '中', '低'],
        goodsdes: '',
        goodsimgbox: ''
      }
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
    // 上传图片
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      document.querySelector('#detectCatch .delete-img').style.opacity = "1"
      document.querySelector('#detectCatch .upload-btn').style.display = "none"
    },

    // 删除图片
    deleteUploadImg(id) {
      document.querySelector(id + " img").style.display = "none";
      document.querySelector(id + " .delete-img").style.opacity = "0";
      document.querySelector(id + " .upload-btn").style.display = "block";
    },

    // 添加
    addPownslist() {
      this.pownslist.push(this.baseList)
      this.$refs.pthirdline.style.height = this.$refs.ownslistdetail.offsetHeight + 98 + "px"
    },

    // 删除
    deletePownslist(i) {
      this.pownslist = this.pownslist.filter((item, index) => index == i)
      this.$refs.pthirdline.style.height = this.$refs.ownslistdetail.offsetHeight - 16 + "px"
    },
    // 预览图片
    uploadImg() {
      document.getElementById("imgBox").click();
    },
    setImagePreview() {

      var docObj = document.getElementById("imgBox");

      var imgObjPreview = document.getElementById("preview");

      if (docObj.files && docObj.files[0]) {

        //火狐下，直接设img属性  

        imgObjPreview.style.display = 'block';

        imgObjPreview.style.width = '100%';

        imgObjPreview.style.height = '134px';

        imgObjPreview.style.margin = 'auto';

        //imgObjPreview.src = docObj.files[0].getAsDataURL();  

        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式    

        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
        document.querySelector('.delete-img').style.opacity = 1
        document.querySelector('.upload-btn').style.display = "none"
        this.imageUrl = imgObjPreview.src
        this.pinfo.pphoto = imgObjPreview.src
        console.log(this.pinfo);

      } else {

        //IE下，使用滤镜  

        docObj.select();

        var imgSrc = document.selection.createRange().text;

        var localImagId = document.getElementById("detectCatch");

        //必须设置初始大小  

        localImagId.style.width = "100%";

        localImagId.style.height = "134px";

        //图片异常的捕捉，防止用户修改后缀来伪造图片  

        try {

          localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";

          localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;

        } catch (e) {

          alert("您上传的图片格式不正确，请重新选择!");

          return false;

        }

        imgObjPreview.style.display = 'none';

        document.selection.empty();

      }

      return true;

    },
    // 抓拍
    catchPhoto() {
      console.log('抓拍');
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

    // 步骤条切换类名
    var lis = document.querySelectorAll('.stepbody .common-step .steps li')
    for (let i = 0; i < lis.length; i++) {
      if (i < 1) {
        lis[i].className = "step-success"
      } else if (i > 2 && i <= 6) {
        lis[i].className = ""
      } else if (i == 2) {
        lis[i].className = "step-process"
      } else if (i == 1) {
        lis[i].className = "step-success current-step"
      }
    }

    // 动态设置财物列表的高度
    this.$refs.pthirdline.style.height = this.$refs.ownslistdetail.offsetHeight + 40 + "px"
  }
}
