<template>
  <div class="top">
    <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    >
      <el-menu-item index="0">
        <img
          style="width: 220px"
          src="@/assets/image/index-logo.jpg"
        />
      </el-menu-item>
    </el-menu>
  </div>
  <div class="login">
    <div class="mask">
      <el-form hide-required-asterisk ref="ruleFormRef" label-position="top" :model="userForm" :rules="rules" class="login-form" :size="formSize">
      <el-tables>
        <el-tab-pane >
          <el-form-item prop="inputValue" label="用户名/邮箱/手机号">
            <el-input v-model="userForm.inputValue" @input="userInput" :prefix-icon="Avatar" size="large" auto-complete="off" placeholder="用户名/邮箱/手机号" :style="{ fontSize: '16px' }" />
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input v-model="userForm.password" type="password" :prefix-icon="Lock" size="large" auto-complete="off" placeholder="密码" :style="{ fontSize: '16px' }" />
          </el-form-item>
          <div class="forgetPassword">
            <span>找回密码</span>
          </div>
        </el-tab-pane>
      </el-tables>
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
    // 匹配用户名（4到12个字母、数字、下划线、短横线）
    const userNameRegex = /^[a-zA-Z0-9_-]{4,12}$/;
    // 匹配邮箱地址
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    // 匹配手机号（以1开头的10位数字）
    const phoneRegex = /^1[3456789]\d{9}$/;
    if (phoneRegex.test(value)) {
      userForm.userName = "";
      userForm.userEmail = "";
      userForm.userPhone = value;
    } else if (emailRegex.test(value)) {
      userForm.userName = "";
      userForm.userEmail = value;
      userForm.userPhone = "";
    } else if (userNameRegex.test(value)) {
      userForm.userName = value;
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
      //成功提示
      if (res.code == 200) {
        user = res.data.user
        sessionStorage.setItem("user", JSON.stringify(user))
        ElMessage({
          message: res.message,
          type: 'success',
        })
        // 路由跳转
        router.push("/index")
      } else {
        ElMessage({
          message: res.message,
          type: 'error',
        })
      }
    })
  }
</script>

<style scoped lang="scss">
.top {
  padding: 12px;
}
.el-menu--horizontal {
  align-items: center;
}
.el-menu, .el-menu-item.is-active {
  border-bottom: none !important;
}
.el-menu--horizontal>.el-menu-item {
  height: 56px !important;
}
.login {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url('@/assets/image/backprint.jpg') no-repeat;
  background-size: auto auto;
  /*.top{
    position: fixed;
    top: 0;
    height: 30px;
    width: 100%;
    background: #7b1e17;
  }*/
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
  width: 313px;
  height: 540px;
  padding: 25px 25px 5px 25px;
  top: 9%;
  left: 9%;
  .forgetPassword{
    color: #fdfbfbb3;
    font-size: 17px;
    font-family: 华文行楷;
    display: flex;
    justify-content: flex-end;
  }
  .submit{
    margin-top: 80px;
    text-align: center;
    .btn_login{
      color: white;
      width: 46%;
      height: 70px;
      font-size: 27px;
      font-family: 华文行楷;
      border-radius: 50px;
    }
  }
}
:deep(.el-form-item__content) {
  justify-content: center;
}
:deep(.el-form-item__label) {
  color: #fdfbfbb3;
  font-size: 17px;
  font-family: 华文行楷;
}
:deep(.el-input__wrapper) {
  border-radius: 50px;
}
:deep(.el-form-item--default) {
  margin-bottom: 26px;
}
</style>