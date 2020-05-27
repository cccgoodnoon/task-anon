<template>
  <v-container>
  <!-- https://www.freecodecamp.org/news/an-introduction-to-dynamic-list-rendering-in-vue-js-a70eea3e321/ -->
    <TweetItem v-for="o in tweets" :key="o.name"  :value="o"/>
 </v-container>
</template>

<script>
  import TweetItem from './TweetViewer';

  export default {
    name: 'TweetList',

    components: {
      TweetItem
    },

    data: () => ({
        tweets: [
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
      items: Array
    }
  }
</script>