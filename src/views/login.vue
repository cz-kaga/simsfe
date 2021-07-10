<template>
  <el-col>
  <el-form :model="form" ref="loginform" :rules="rules" :hide-required-asterisk="true">
    <el-form-item label="学工号" prop="uid" :rules="rules" :hide-required-asterisk="true">
      <el-input v-model="form.uid"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="passwd" :rules="rules" :hide-required-asterisk="true">
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
        uid: '',
        passwd:''
      },
      rules:{

      }
    };
  },

  methods:{
    onSubmit(){
        const loading = this.$loading({
          lock:true,
        });
        const cnm = this;
        cnm.fullscreenloading = true;
        const wtf = this.$message;
        axios({
          method : 'post',
          url:'login',
          data:{
            uid : this.form.uid,
            passwd: this.form.passwd
          }
        }).then(function (response){
          loading.close();
          if(response.data.status === "success") {
              wtf.success("登陆成功,欢迎您!"+response.data.username+"撒嘛");
              cnm.$store.dispatch('setLogin',true)
          }
          else
            wtf.error("唔...服务器要坏掉了...");
          console.log(response);
          cnm.$store.dispatch('setLogin',false)

        }).catch(function (error){
          loading.close();
          wtf.error("有什么地方被玩坏了呢...");
          cnm.$store.dispatch('setLogin',false)
          console.log(error);
          console.log(cnm.$store);
        });

    }
  }
}
</script>

<style scoped>

</style>