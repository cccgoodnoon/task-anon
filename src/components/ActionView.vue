<template>
  <v-container class="action-container">
    <!-- <v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>通知和任务</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-view-module</v-icon>
      </v-btn>
    </v-toolbar> -->
    <v-row> 
      <v-col cols="12" class="login">
        <div class="text-center">
          <v-btn depressed large color="teal lighten-2" height="50"
           style="width: 89%;" dark @click="jumpToLogin">用 户 登 录</v-btn>
        </div>
      </v-col>     

      <v-col cols="12">
        <v-date-picker v-model="picker" width="190" color="teal lighten-2"></v-date-picker>
      </v-col>

      <v-col cols="12" class="action">
        <v-dialog
          ref="dialog1"
          v-model="modal"
          :return-value.sync="startDate"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="startDate"
              label="选择任务开始时间"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="startDate" color="teal lighten-2" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialog1.save(startDate)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>

      <v-col cols="12" class="action">
        <v-dialog
          ref="dialog2"
          v-model="modal1"
          :return-value.sync="endDate"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="endDate"
              label="选择任务截止时间"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="endDate" color="teal lighten-2" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal1 = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialog2.save(endDate)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>

      <v-col cols="12" class="action-search">
        <v-text-field
          v-model="message"
          label="Search"
          outlined
          clearable
        ></v-text-field>
      </v-col>
       <v-col cols="12" class="login">
        <div class="text-center">
          <v-btn depressed large color="teal lighten-2 searchBtn" height="50" dark @click="toSearch">查询</v-btn><br>
          <v-btn depressed large color="teal  resetBtn" height="50" dark @click="toClear">重置</v-btn>
        </div>
      </v-col>     
      <!-- <v-col cols="12" class="action-select">
        <v-radio-group>
          <v-radio label="学生版"></v-radio>
          <v-radio label="教师版"></v-radio>
        </v-radio-group>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import vm from '../service/vm.js'
  export default {
    name: 'ActionView',
    data() {
      return {
          task:[],
          picker: new Date().toISOString().substr(0, 10),
          startDate: "",//new Date().toISOString().substr(0, 10),
          endDate: "",//new Date().toISOString().substr(0, 10),
          modal: false,
          modal1: false,
          message:"",
      };
    },
    methods:{
      jumpToLogin(){
        window.location.href = "http://202.120.167.50/openedu/admin" 
      },
      toSearch(){
        console.log(this.message,22)
        var fromData = {
          message:this.message,
          startDate:this.startDate,
          endData:this.endDate,
        };
        vm.$emit("setData",fromData);
      },
      toClear(){
        this.endDate = "";
        this.startDate = "";
        this.message = "";
        var fromData = {
          message:"",
          startDate:"",
          endData:"",
        };
        vm.$emit("setData",fromData);
      }
    }
  }
</script>

<style>
.action-container{
  padding: 12px;
  min-height: 1000px;
}
.login{
  padding: 10px 0px 3px 0px;
}
.action{
  padding: 0px 12px 0px 18px;
}
.action-search{
  padding: 0px 12px 0px 18px;
}
.action-select{
  padding: 0px 12px 0px 18px;
}
.login{
  padding: 0px;
}
.v-application .teal.searchBtn{
  width: 89%;height: 40px!important;
}
.v-application .teal.resetBtn{
  width: 89%;height: 40px!important;margin-top:15px;background-color: #b1b7b6 !important; border-color: #b1b7b6 !important;color:#333;
}
</style>