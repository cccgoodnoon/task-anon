<template>
  <v-container>
  <!-- https://www.freecodecamp.org/news/an-introduction-to-dynamic-list-rendering-in-vue-js-a70eea3e321/ -->
     <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img :src="value.img" alt="Image">
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
      </div>
    </div>  
  </v-container>
</template>

<script>
  export default {
    name: 'TweetViewer',

    props: {
      value: Object
    }
  }
</script>