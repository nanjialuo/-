
<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col class="col1" :span="8">
      <el-form class="form" :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="startLogin()">登录</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          // 如果文本不写内容会触发
          { required: true, message: "请输入用户名", trigger: "blur" }
          
        ],
        password: [
          // 如果文本不写内容会触发
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 开始登录
    startLogin() {
      // 在 事件中对表单再次校验 (格式)

      this.$refs.ruleForm.validate(async valid => {
        // 如果校验不成功 中止
        if (!valid) {
          return;
        }
        // 校验成功
        // console.log("开始登录");

        let res = await this.$axios.post(
          "login",
          this.ruleForm
        );
        console.log(res);

        // if (res.status === 201) {
           //1. 保存token到本地
          localStorage.setItem("token", Date.parse(new Date()));  
          //2. 登录成功提示
          this.$message({
            message: '登陆成功',
            type: "success",
            duration: 800
          });
          //3. 跳转到home页面 (编程式导航)
          this.$router.push("/home");
        // } else {
        //   this.$message({
        //     message: "登陆失败",
        //     type: "error",
        //     duration: 800
        //   });
        // }
      });
    },
    // 重置
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  }
};
</script>

<style scoped>
/* 自己加的类 */
.col1 {
  background: #fff;
  padding: 25px 40px;
  border-radius: 15px;
}

h1 {
  color: red;
}
</style>

