<template>
  <div class="login">
    <el-form ref="ruleFormRef" label-position="left" :model="userForm" :rules="rules" class="login-form" :size="formSize">
      <h3 class="title">登录</h3>
      <el-form-item prop="username">
        <el-input v-model="userForm.username" :prefix-icon="Avatar" size="large" auto-complete="off" placeholder="用户名/邮箱/手机号" :style="{ fontSize: '16px' }" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="userForm.password" type="password" :prefix-icon="Lock" size="large" auto-complete="off" placeholder="密码" :style="{ fontSize: '16px' }" />
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button size="large" type="primary" style="width:100%;" @click="submitForm()">
        登 录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import {loginApi} from '@/api/login'
  import { ElMessage } from 'element-plus'
  import { Avatar, Lock } from '@element-plus/icons-vue'
  import router from '@/router'

  const formSize = ref('default')
  const ruleFormRef = ref<FormInstance>()
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
  const submitForm = async () => {
    await ruleFormRef.value.validate()
    const res = await loginApi(userForm)
    console.log(res)
  }

  var user = reactive({})
</script>

<style scoped>
.login {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-image: url("@/assets/img/background-image.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;*/
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
}
.login-form .el-input,.login-form .el-input input {
  height: 40px;
}
</style>