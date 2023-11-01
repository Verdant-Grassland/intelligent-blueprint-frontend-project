<template>
  <div class="top_container">
    <div class="inner">
      <img
        src="../assets/image/zhihuilangtulogo.png"
        style="width: 100px"
        alt="" />
      <div class="text">
        <ul>
          <li>首页</li>
          <li>
            <el-dropdown>
              <span class="el-dropdown-link">
                分类
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
          <li>动态</li>
          <li>志愿者招聘</li>
          <li>文创产品</li>
        </ul>
      </div>
      <div class="search">
        <el-input v-model="searchValue" :prefix-icon="Search" size="small"></el-input>
      </div>
      <div class="person">
        <span>个人中心</span>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
</style>