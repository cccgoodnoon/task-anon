<template>
  <v-container>
  <!-- https://www.freecodecamp.org/news/an-introduction-to-dynamic-list-rendering-in-vue-js-a70eea3e321/ -->
     <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64"  height="150">
              <img :src="value.img" alt="Image"/>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{value.name}}</strong> <small>{{value.handle}}</small>
                <br>
                {{value.tweet}}
              </p>
            </div>
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                  <span class="likes">{{value.likes}}</span>
                </a>
              </div>
          </div>
        </article>
        <v-list-item-action>
          <v-btn icon @click="_onclick">
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>

      </div>
    </div>  
  </v-container>
</template>

<script>
  export default {
    name: 'TaskViewer',

    // https://012.vuejs.org/guide/components.html#Passing_Callbacks_as_Props
    props: {
      value: Object,

      onclick: {
        type: Function,
        // 对象或数组默认值必须从一个工厂函数获取
        default: function () {
            return { message: 'hello' }
        }
      }
    },

    methods:{
      _onclick: function(){ //vue的点击触发事件
        let s = this.value.tweet
        alert("完成vue的点击事件" + s)
        this.onclick(this.value)
      }
    }

  }
</script>