<template>
  <v-container>
    <div class="article"> 
      <h1 class="article-title">{{task.title}}</h1>
      <div class="article-meta">
        <span class="date">
          <i class="iconfont icon-kaishishijian1"></i>
          {{task.begintime}}
        </span>
        <span class="date">
          <i class="iconfont icon-jieshushijian1"></i>
          {{task.endtime}}
        </span>
        <span class="author">
          <i class="iconfont icon-wode"></i>
          {{task.performer}}
        </span>
        <span class="watch">
          <i class="iconfont icon-icon-p_mrpjinduzhuizong"></i>
          {{task.state|getStateName}}
        </span>
      </div>
      <div class="content-detail" v-html="task.description"></div>
      <div class="backbutton">
        <v-btn depressed @click="backToList">返回列表</v-btn>
      </div>
      <div class="meta-split" v-if="isHaveAttachment"></div>
      <div class="attach">
        <div class="file-title"  v-if="isHaveAttachment">附件列表</div>
        <div class="file-list-total">
          <div :span="8" v-for="(item,index) in this.file_list" :key=index class="file-list">
            <div class="avatar-uploader">
              <img width="32" height="32" :src="require('../../assets/file/'+matchType(item.filename)+'.png')">
              <p style="margin-bottom:6px;text-align: left;width:100px">{{item.filename}}</p>
            </div>
            <div class="mask">
              <a @click="previewer(item.uuid)" target="_blank" title="点击预览" style="color:black">
                <i class="iconfont icon-fangda"></i>
              </a>
              <a @click="singeDownloadFile(item.uuid)" title="点击下载" style="color:black">
                <i class="iconfont icon-xiazai"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import api from '../../service/common.js'
  export const downloadFile = (url) => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";  // 防止影响页面
    iframe.style.height = 0;  // 防止影响页面
    iframe.src = url;
    document.body.appendChild(iframe);  // 这一行必须，iframe挂在到dom树上才会发请求
    // 5分钟之后删除（onload方法对于下载链接不起作用，就先抠脚一下吧）
    setTimeout(() => {
      iframe.remove();
    }, 5 * 60 * 1000);
  }
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
        isHaveAttachment: false,
        file_list: [],
      };
    },
    mounted(){
      this.getData();
    },
    methods:{
      singeDownloadFile(uuid) {
        downloadFile('http://127.0.0.1:5000/api/u/fdb/task/' + uuid);
      },
      previewer(uuid) {
        window.open("http://127.0.0.1:5000/api/u/fdb/task/content/" + uuid, '_blank');
      },
      getData(){
          let self = this
          api._gets(self.$route.params.id).then(res => {
            self.task = res;
            // console.log(res,8888);
            if (self.task.nodeid != null && self.task.nodeid != 'None') {
              this.getFileName();
            }
          },err => {
              console.log(err);
          })
      },
      getFileName() {
        let self = this
        api._getFileName(this.task.nodeid).then(res => {
          this.file_list = res
          if (this.file_list.length){
            this.isHaveAttachment = true
          }
        })
      },
      backToList(){
        this.$router.push("/tasks");
      },
      beforeRouteLeave: (to, from, next) => {
        if (to.path !== '/tasks') {
          sessionStorage.removeItem('page')
        }
        next()
      },
      matchType(filename) {
      // console.log(this.filename);
        var suffix = ''
        var result = ''
        try {
          var fileArr = filename.split('.')
          suffix = fileArr[fileArr.length - 1]
        } catch (err) {
          suffix = ''
        }
        if (!suffix) {
          result = false
          return result
        }
        var imglist = ['png', 'jpg', 'jpeg', 'gif']
        result = imglist.some(function (item) {
          return item === suffix
        })
        if (result) {
          result = 'image'
          return result
        }
        var txtlist = ['txt']
        result = txtlist.some(function (item) {
          return item === suffix
        })
        if (result) {
          result = 'txt'
          return result
        }
        var pdflist = ['pdf']
        result = pdflist.some(function (item) {
          return item === suffix
        })
        if (result) {
          result = 'pdf'
          return result
        }
        var doclist = ['doc']
        result = doclist.some(function (item) {
          return item === suffix
        })
        if (result) {
          result = 'doc'
          return result
        }
        var pptlist = ['ppt']
        result = pptlist.some(function (item) {
          return item === suffix
        })
        if (result) {
          result = 'ppt'
          return result
        }
        var ziplist = ['zip', 'rar']
        result = ziplist.some(function (item) {
          return item === suffix
        })
        if (result) {
          result = 'zip'
          return result
        }
        var mp4list = ['mp4']
        result = mp4list.some(function (item) {
          return item === suffix
        })
        if (result) {
          result = 'mp4'
          return result
        }
        var xlslist = ['xls', 'xlsx']
        result = xlslist.some(function (item) {
          return item === suffix
        })
        if (result) {
          result = 'xls'
          return result
        }
      },
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
.content-detail {
  white-space: pre-wrap;
  margin: 40px !important;
  min-height: 400px;
}
.article-title {
  /* color: #34495e; */
  font-size: 20px;
  margin: 30px 0px 5px;
  font-weight: 500;
  text-align: center;
}
.article-meta {
  padding: 1em 0;
  border-bottom: 1px dashed #cacaca;
  border-top: 1px dashed #cacaca;
  margin: 1.5em 0;
  font-size: 13px;
  color: #757575;
  text-align: center;
}
.article {
  min-height: 1020px;
}
.meta-split{
    margin: 100px 40px 30px 40px;
    height: 1px;
    border: none;
    background-color: #ddd;
    background-image: repeating-linear-gradient(-45deg,#fff,#fff 4px,transparent 0,transparent 8px);
}
.attach {
  padding-left:30px;
}
.file-title {
  display: inline-block;
  padding: 5px 15px 5px 50px;
  vertical-align: top;
  font-size: 14px;
  vertical-align: top;
}
.file-list-total{
  display: inline-block;
  padding: 0px;
  vertical-align: top;
  width: 700px;
}
.file-list {
  display: inline-block;
  padding: 5px 15px 30px 10px;
  vertical-align: top;
  font-size: 14px;
  white-space:break-word;
}

p {
  /* padding: 5px 0px 0px 60px; */
  font-family: sans-serif;
  font-size: 12px;
  text-align: center;
}
.avatar-uploader{
  text-align: left;
}
.mask{
  text-align: left;
}

.backbutton{
  margin: 0 40px;
  padding: 0;
  float: right;
}
.file-tr{
  margin-bottom: 20px;
}
</style>