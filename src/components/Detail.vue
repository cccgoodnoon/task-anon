<template>
  <v-container>
    <v-row style="height:875px;">
      <v-col style="paddingTop:0">
        <v-card class="detail-card">
          <v-card-text>
            <div class="markdown-body">
              <h3>任务编码</h3>
              <span>{{task.id}}</span>
            </div>
          </v-card-text>
          <v-divider/>
          <v-card-text>
            <div class="markdown-body">
              <h3>简介</h3>
              <span>{{task.title}}</span>
            </div>
          </v-card-text>
          <v-divider/>
          <v-card-text>
            <div class="markdown-body">
              <h3>负责人</h3>
                <span> {{task.performer}}</span>
            </div>
          </v-card-text>
          <v-divider/>
          <v-card-text>
            <div class="markdown-body">
              <h3>开始日期</h3>
                <span> {{task.begintime}}</span>
            </div>
          </v-card-text>
          <v-divider/>
          <v-card-text>
            <div class="markdown-body">
              <h3>截止日期</h3>
                <span> {{task.endtime}}</span>
            </div>
          </v-card-text>
          <v-divider/>
          <v-card-text>
            <div class="markdown-body">
              <h3>完成状态</h3>
                <span> {{task.state|getStateName}}</span>
            </div>
          </v-card-text>
          <v-divider/>
        </v-card>
      </v-col>
    </v-row>    
  </v-container>
</template>

<script>
import api from '../service/api.js'
  export default {
    filters: {
      getStateName(state) {
        const stateMap= {
          0: '未完成',
          1: '已完成',
        };
        return stateMap[state]
      }
    },
    data() {
        return {
            task:[],
        };
    },
    mounted(){
      this.getData();
    },
    methods:{
        getData(){
            let self = this
            api._gets(self.$route.params.id).then(res => {
                self.task = res;
                console.log(res,8888);
            },err => {
                console.log(err);
            })
        }
    }
  };
</script>

<style>
.markdown-body {
  font-family: "Microsoft YaHei" !important;
  font-weight: 400;
  max-width: 100%;
}
h3{
  margin: 8px;
  color: #222831;
}
.detail-card span{
  margin: 8px;
  color: #00adb5;
}
</style>