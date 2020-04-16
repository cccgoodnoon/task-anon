<template>
  <v-container class="taskcontent">
      <v-row>
        <v-col v-for="item in task" :key="item.id" cols="12" md="6">
          <v-hover v-slot:default="{ hover }" >
            <v-card :elevation="hover ? 8 : 1" class="pa-6 mx-2">
              <h2>
                <router-link :to="{name:'task_detail',params:{id:item.id}}" style="color:#2a2935;text-decoration:none;">{{item.title}}</router-link>
              </h2>
              <div class="meta-box">
                <span class="date">
                  <i class="iconfont icon-rili"></i>
                  {{item.endtime}}
                </span>
                <span class="author">
                  <i class="iconfont icon-wode"></i>
                  {{item.performer}}
                </span>
                <span class="state">
                  <i class="iconfont icon-icon-p_mrpjinduzhuizong"></i>
                  {{item.state|getStateName}}
                </span>
              </div>
              <div class="content">
                {{item.description}}
              </div>
              <v-btn
                  depressed
                  :to="{name:'task_detail',params:{id:item.id}}"
                  x-small
                  color="success"
                >任务详情</v-btn>
            </v-card>
          </v-hover>
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
    data: () => ({
      task:[],
    }),
    mounted(){
      this.getData();
    },
    methods:{
      getData(){
        let self = this
        api._get().then(res => {
            self.task = res;
            console.log(res,8888);
        },err => {
            console.log(err);
        })
      }
    }
  }
</script>

<style>
  .meta-box {
    font-size: 12px;
    margin-bottom: 10px;
    color: #757575;
  }
  .taskcontent h2 {
    margin-bottom: 16px;
    color: #2a2935;
  }
  .taskcontent a {
    color: #2a2935;
    font-size: 24px;
    text-decoration: none;
    font-weight: 500;
  }
  span {
    margin-right: 12px;
  }
  .iconfont {
    font-size: 14px;
  }
  .content {
    font-size: 18px;
    line-height: 24px;
  }

</style>