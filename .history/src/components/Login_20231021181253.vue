<template>
  <div class="login">
    <div class="top"></div>
    <div class="mask">
      <el-form hide-required-asterisk ref="ruleFormRef" label-position="top" :model="userForm" :rules="rules" class="login-form" :size="formSize">
      <h1 class="title">登录</h1>
      <el-form-item prop="inputValue" label="用户名/邮箱/手机号">
        <el-input v-model="userForm.inputValue" @input="userInput" :prefix-icon="Avatar" size="large" auto-complete="off" placeholder="用户名/邮箱/手机号" :style="{ fontSize: '16px' }" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="userForm.password" type="password" :prefix-icon="Lock" size="large" auto-complete="off" placeholder="密码" :style="{ fontSize: '16px' }" />
      </el-form-item>
      <div class="forgetPassword">
        <span>找回密码</span>
      </div>
      <el-form-item class="submit">
          <el-button size="large" color="#7b1e17" :dark="isDark" class="btn_login" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import axios from '@/util/http'
  import { ElMessage } from 'element-plus'
  import { Avatar, Lock } from '@element-plus/icons-vue'
  import router from '@/router'

  const formSize = ref('default')
  const ruleFormRef = ref<FormInstance>()
  const userForm = reactive({
    userName: "",
    userEmail: "",
    userPhone: "",
    password: "",
    inputValue: "",
  })

  const userInput = (value: any) => {
    userForm.inputValue = value;

    // 匹配用户名（3到12个字母、数字、下划线、短横线）
    const userNameRegex = /^[a-zA-Z0-9_-]{4,12}$/;
    // 匹配邮箱地址
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    // 匹配手机号（以1开头的10位数字）
    const phoneRegex = /^1[3456789]\d{9}$/;

    if (phoneRegex.test(value)) {
      userForm.userName = value;
      userForm.userEmail = "";
      userForm.userPhone = "";
    } else if (emailRegex.test(value)) {
      userForm.userName = "";
      userForm.userEmail = value;
      userForm.userPhone = "";
    } else if (phoneRegex.test(value)) {
      userForm.userName = "";
      userForm.userEmail = "";
      userForm.userPhone = value;
    } else {
      userForm.userName = "";
      userForm.userEmail = "";
      userForm.userPhone = "";
    }
  };


  // 数据效验
  const rules = reactive<FormRules>({
    inputValue: [
      { required: true, message: '请输入用户名/邮箱/手机号', trigger: 'blur' },
      { min: 3, max: 20, message: '用户名/邮箱/手机号 长度范围是 3 至 20 个字符', trigger: 'blur' }
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
        //取后端的用户信息 就这个；你去页面那请求一下后端；我那个输出加错了
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
  font-size: 62px;
  font-family: 华文行楷;
  font-weight: 500;
}
.login-form {
  position: absolute;
  border-radius: 2px;
  background: #7b1e17cc;
  width: 300px;
  height: 450px;
  padding: 25px 25px 5px 25px;
  top: 18%;
  left: 8%;
  .forgetPassword{
    float: right;
    color: rgba($color: #fdfbfb, $alpha: 0.7);
  }
  .submit{
    margin-top: 80px;
    text-align: center;
    .btn_login{
      color: white;
      width: 60%;
      height: 70px;
      font-size: 20px;
      border-radius: 50px;
    }
  }
}
:deep(.el-form-item__content) {
  justify-content: center;
}
:deep(.el-form-item__label) {
  color: white;
}
:deep(.el-input__wrapper) {
  border-radius: 50px;
}
:deep(.el-form-item--default) {
  margin-bottom: 26px;
}
</style>