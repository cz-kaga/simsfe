<template>
  <el-header>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><router-link to="/">首页</router-link> </el-menu-item>
    <el-submenu index="2">
      <template slot="title">管理系统</template>
      <el-menu-item index="2-1" disabled>分数</el-menu-item>
      <el-menu-item index="2-2" disabled>课程</el-menu-item>
      <el-menu-item index="2-3" disabled>个人信息</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">设置</el-menu-item>
    <el-menu-item index="4" ><router-link to="/about">关于</router-link></el-menu-item>
  </el-menu>
  </el-header>

</template>

<script>
export default {
  name: "title",
  props:{
    title1:String
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>