<template>
  <el-header>
  <el-menu :default-active="activeIndex" class="titlelogined" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><router-link to="/">首页</router-link> </el-menu-item>
    <el-submenu index="2">
      <template slot="title">管理系统</template>
      <el-menu-item index="2-1"  ref="score">分数</el-menu-item>
      <el-menu-item index="2-2"  ref="subject">课程</el-menu-item>
      <el-menu-item index="2-3"  ref="info">个人信息</el-menu-item>
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
    title1:String,
    score:String
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  computed:{
    getisLogin(){
      return this.$store.state.isLogin
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  watch:{
    getisLogin:{
      handler(newValue,){
        if(newValue) {
          this.$ref['score'].disabled(false)
          this.$ref['subject'].disabled(false)
          this.$ref['info'].disabled(false)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>