<template>
  <v-container class="col1">
    <v-row class="text-center" style="background-color:rgb(42,41,53);height:100vh;top:0px;position:fixed">     
      <v-col cols="12">
        <div class="head-logo">
          <img src="../assets/head-logo.jpg" alt="head" style="height:95px">
        </div>
        <div class="name">cccgoodnoon</div>
        <div class="com">同济大学电信学院控制系</div>
        <hr class="line">
      </v-col>
      <hr>
      <v-col class="mb-4">
      </v-col>

      <v-col class="mb-5" cols="12">
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'NavigationView',
    data(){ 
      return{};
    },
    
  }
</script>

<style>
  .head-logo{
    height: 95px;
    min-width: 95px;
    width: 95px;
    margin: 30px 30px 20px;
    align-items: center;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    line-height: normal;
    position: relative;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
  }
  .container {
    width: 100%;
    padding: 0px;
    margin-right: auto;
    margin-left: auto;
  }
  .name{
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    margin-bottom: 15px;
    font-family: sans-serif;
    font-weight:bold;
  }
  .com{
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    margin-bottom: 10px;
    letter-spacing:2px;
    margin-bottom: 35px;
  }
  .line{
    border-width: thin 0 0 0;
    max-width: 100%;
    height: 0px;
    border-color: rgba(255, 255, 255, 0.27);
  }
  .col1 {
    padding: 0px;
    margin: 0px;
  }
</style>