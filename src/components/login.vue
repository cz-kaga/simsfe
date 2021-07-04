<template>
  <el-col>
  <el-form model="form" ref="loginform">
    <el-form-item label="服务器地址">
      <el-input v-model="form.serveraddr"></el-input>
    </el-form-item>
    <el-form-item label="学工号">
      <el-input v-model="form.uid"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="form.passwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit()">登录</el-button>
    </el-form-item>
  </el-form>
  </el-col>
</template>

<script>
const axios = require('axios').default;
axios.defaults.withCredentials = true
export default {
  name: "login",
  data() {
    return {
      form:{
        serveraddr: '',
        uid: '',
        passwd:''
      }
    }
  },
  methods:{

    onSubmit(){
      this.$message( this.form.serveraddr);
      axios({
        method : 'post',
        url:'login',
        data:{
          serveraddr : this.form.serveraddr,
          uid : this.form.uid,
          passwd: this.form.passwd
        }
      }).then(function (response){
        console.log(response);
      }).catch(function (error){
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>