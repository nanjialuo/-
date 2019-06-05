export default {
  data() {
    return {
      pinfo: {
        pname: '',
        pnumber: '',
        explain: '',
        pphoto: ''
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
    };
  },
  methods: {
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

    // 步骤条切换类名
    var lis = document.querySelectorAll('.stepbody .common-step .steps li')
    for (let i = 0; i < lis.length; i++) {
      if (i < 3) {
        lis[i].className = "step-success"
      } else if (i > 4 && i <= 6) {
        lis[i].className = ""
      } else if (i == 4) {
        lis[i].className = "step-process"
      } else if (i == 3) {
        lis[i].className = "step-success current-step"
      }
    }
  }
}
