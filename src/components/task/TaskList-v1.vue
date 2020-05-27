<template>
  <v-container>
  <!-- https://www.freecodecamp.org/news/an-introduction-to-dynamic-list-rendering-in-vue-js-a70eea3e321/ -->
  items count = {{items.length}}<br>
            <v-btn  @click="_onrefreshclick">Refresh (it has problems when loading into data.objects)
          </v-btn>

    <TaskViewer v-for="o in objects" :key="o.name" :value="o" :onclick=onitemclick />
 </v-container>
</template>

<script>
  import TaskViewer from './TaskViewer'
  import get_app_service from '../../service/appservice.js'

  export default {
    name: 'TaskList',

    components: {
      TaskViewer
    },

    data: () => ({
        objects: [
          /*
        {
            id: 1,
            name: 'James',
            handle: '@jokerjames',
            img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
            tweet: "If you don't succeed, dust yourself off and try again.",
            likes: 10,
        }
        */
        ],
        objects2: [
        {
            id: 1,
            name: 'James',
            handle: '@jokerjames',
            img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
            tweet: "If you don't succeed, dust yourself off and try again.",
            likes: 10,
        },
        { 
            id: 2,
            name: 'Fatima',
            handle: '@fantasticfatima',
            img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
            tweet: 'Better late than never but never late is better.',
            likes: 12,
        },
        {
            id: 3,
            name: 'Xin',
            handle: '@xeroxin',
            img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
            tweet: 'Beauty in the struggle, ugliness in the success.',
            likes: 18,
        }
        ]
    }),

    props: {
      // Vue自定义组件中Props中接收数组或对象
      // https://www.jianshu.com/p/904551dc6c15
      // Use Array/Object in props as default value
      items: {
        type: Array,
        // default: function () { return [] }
        default: () => []
      },
    },

    methods: {

      _onrefreshclick: function(){
        this.find()
        // this.async_find()
      },

      // retrieve a task list from the low level service.
      //
      // Reference
      // vue 数据（data）赋值问题, 2018,
      // https://blog.csdn.net/Bryant953/article/details/79411688
      // Vue中数组赋值问题
      // https://blog.csdn.net/weixin_34130269/article/details/91468061
      // vue中请求到的数据赋值给data 对象
      // https://blog.csdn.net/zhusixu/article/details/84335127
      // VUE中数组赋值push与=的区别
      // https://blog.csdn.net/chupin6790/article/details/100682984
      find: function() {
        console.log("TaskList.vue -> find: enter")
        let avc = get_app_service()
        console.log("TaskList.vue -> get avc")
        let _items = avc.get_task_list()
        console.log("TaskList.vue -> find after calling service layer")
        console.log(_items.length)
       
        // axios
        //  .get('/api/vue/getAllUsers').then((response) => {
        //  this.users = response.data;
        // })

        // this.objects2 = Object.assign({}, _items)
        //this.$set(this.objects,0,_items[0])
        // this.set(this.objects,1,_items[1])
        let _this = this
        for (let i = 0; i < _items.length; i++) {
          //即采用push去添加元素
          _this.objects.push(_items[i])
        }
        console.log("TaskList.vue -> find: leave")
      },

      async_find: function()
      {
        console.log("TaskList.vue -> async_find: enter")
        let avc = get_app_service()
        let _this = this
        avc.async_get_task_list((response)=>{_this.objects = response.data})
      },

      onitemclick: function(value){
        let s = value.tweet
        alert("tasklist: received on item click event from the TaskViewer component " + s)
      }
    },

    // Understanding Vue.js Lifecycle Hooks
    // https://alligator.io/vuejs/component-lifecycle/
    created: function() {
      console.log("TaskList: inside method created")
      this.find()
    }
  }
</script>