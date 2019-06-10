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
