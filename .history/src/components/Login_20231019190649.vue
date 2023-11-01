<template>
  <div class="top"></div>
  <div class="mask">
    <el-form hide-required-asterisk ref="ruleFormRef" label-position="top" :model="userForm" :rules="rules" class="login-form" :size="formSize">
    <h1 class="title">登录</h1>
    <el-form-item prop="username" label="手机号">
      <el-input v-model="userForm.username" :prefix-icon="Avatar" size="large" auto-complete="off" placeholder="用户名/邮箱/手机号" :style="{ fontSize: '16px' }" />
    </el-form-item>
    <el-form-item prop="password" label="密码">
      <el-input v-model="userForm.password" type="password" :prefix-icon="Lock" size="large" auto-complete="off" placeholder="密码" :style="{ fontSize: '16px' }" />
    </el-form-item>
    <div class="forgetPassword">
      <span>找回密码</span>
    </div>
    <div class="submit">
      <el-button size="large" class="btn_login">登录</el-button>
    </div>
  </el-form>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormRules } from 'element-plus'
  import {loginApi} from '@/api/login'
  import { ElMessage } from 'element-plus'
  import { Avatar, Lock } from '@element-plus/icons-vue'
  import router from '@/router'

  const formSize = ref('default')
  const ruleFormRef = ref()
  const userForm = reactive({
    username:'',
    password:''
  })
  // 数据效验
  const rules = reactive<FormRules>({
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 12, message: '用户名的长度范围是 3 至 12 个字符', trigger: 'blur' }
    ],
    useremail: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { min: 6, max: 20, message: '电子邮件地址的长度范围是 6 至 20 个字符', trigger: 'blur' }
    ],
    userphone: [
      { required: true, message: '请输入手机号', trigger: 'blur' },
      { max: 11, message: '手机号通常是 11 位数字', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 10, message: '密码至少是6位至15位', trigger: 'blur' }
    ]
  })
 // 提交
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        userLogin()
      } else {
        console.log('error submit!', fields)
      }
    })
  }

  var user = reactive({})
  function userLogin() {
    axios.post("/user/login", userForm).then(res => {
      /* //成功提示
      if (res.data.code == 200) {
        //取后端的用户信息
        user = res.data.data.user
        sessionStorage.setItem("user", JSON.stringify(user))
        ElMessage({
          message: res.data.message,
          type: 'success',
        })
        // 路由跳转
        router.push("/index")
      } else {
        ElMessage({
          message: res.data.message,
          type: 'error',
        })
      } */
      console.log(res)
    })
  }
</script>

<style scoped lang="scss">
.login {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url('@/assets/image/backprint.jpg') 50%;
  background-size: contain;
  .top{
    position: fixed;
    top: 0;
    height: 30px;
    width: 100%;
    background: #7b1e17;
  }
  .mask{
    width: 100%;
    height: 100%;
    background: rgba($color: #fdfdfd, $alpha: 0.5);
  }
}
.title {
  margin: 0px auto 50px;
  text-align: center;
  color: #000000;
}

.login-form {
  position: absolute;
  border-radius: 6px;
  background: rgba(146, 78, 71, 0.6);
  width: 300px;
  height: 450px;
  padding: 25px 25px 5px 25px;
  top: 8%;
  left: 37%;
  .forgetPassword{
    float: right;
    color: rgba($color: #fdfbfb, $alpha: 0.7);
  }
  .submit{
    margin-top: 80px;
    text-align: center;
    .btn_login{
    background-color: #7b1e17;
    border-color: #7b1e17;
    color: white;
    width: 60%;
    height: 70px;
    font-size: 20px;
    border-radius: 50px;
  }
  }
}
:deep(.el-form-item__label){
  color: white;
}
:deep(.el-input__wrapper){
  border-radius: 50px;
}
</style>