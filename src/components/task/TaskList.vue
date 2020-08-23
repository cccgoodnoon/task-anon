<template>
  <v-container class="taskcontent">
      <v-row>
        <v-col v-for="item in task" :key="item.id" cols="12" class="card-col">
          <v-hover v-slot:default="{ hover }" >
            <v-card :elevation="hover ? 8 : 1" class="card">
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
                {{item.description|ellipsis}}
                <!-- <v-btn
                  depressed
                  :to="{name:'task_detail',params:{id:item.id}}"
                  x-small
                  color="success"
                >详情</v-btn> -->
              </div>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="Math.ceil(total / 5)"
              @input="pageChange"
              :total-visible="total"
            ></v-pagination>
          </v-container>
        </v-col>

      </v-row>
    </v-container>
</template>

<script>
  import api from '../../service/common.js'
  import vm from '../../service/vm.js'
  export default {
    filters: {
      getStateName(state) {
        const stateMap= {
          0: '未完成',
          1: '已完成',
        };
        return stateMap[state]
      },
      ellipsis (value) {
        if (!value) return ''
        if (value.length > 80) {
          return value.slice(0,80) + '...'
        }
        return value
      },
    },
    data: () => ({
      page:1,
      total:11,
      task:[],
      searchData:{
        message:"",
        startDate:'',
        endDate:'',
      },
      totalData:[]
    }),
    mounted(){
      this.getData("",{});
      vm.$on("setData",(data) => {
        console.log(data,111);
        this.getData(1,data);
        this.searchData = data;
      });
      console.log(this.compareTime("2020-08-01","2020-08-23"),1)
      console.log(this.compareTime("2020-08-01","2020-07-23"),2)
      console.log(this.compareTime("2020-08-01","2020-08-01"),3)
    },
    methods:{
      pageChange(p){
        console.log(p)
        this.task=this.totalData.slice((p-1)*5,p*5);
      },
      getData(flag,params){
        let self = this
        api._get().then(res => {
            self.task = res;
            
            if(flag == 1){
              if(params.message){
                var newTask = [];
                self.task.forEach(d => {
                  if(d.title.indexOf(params.message) > -1 || d.performer.indexOf(params.message) > -1 || d.description.indexOf(params.message) > -1){
                    newTask.push(d);
                  }
                });
                self.task = newTask;
              }
              
              if(params.startDate != "" && params.endDate != ""){
                var newArr = [];
                self.task.forEach(d => {
                  //var xiao = self.compareTime(d.endtime,params.endDate);
                  //var da = self.compareTime(d.endtime,params.startDate);
                  var com = self.compareTime(d.endtime,params.startDate, params.endData);
                  console.log(com);
                  if(com){
                    console.log(d,899)
                    newArr.push(d);
                  }
                });
                 self.task = newArr;
              }
             
            }
            self.total = self.task.length;
            self.totalData = self.task;
            self.task=self.task.slice((1-1)*5,1*5);
            console.log(self.task,8888);
        },err => {
            console.log(err);
        })
      },
      compareTime(curd,date1, date2){
        console.log(curd,date1,date2);
          curd = new Date(curd);
          var oDate1 = new Date(date1);
          var oDate2 = new Date(date2);
          
          if(curd >= oDate1 && curd <= oDate2){
            return true;
          }
          return false;

      },
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
    margin-bottom:5px;
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
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 5px;
  }
  .card{
    padding: 15px 30px 20px;
    margin: 0px 8px;
  }
  .card-col{
    padding: 6px 12px;
  }
</style>