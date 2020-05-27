<template>
  <v-container>
    <!--
    <v-toolbar
      color="light-blue"
      dark
    >
    -->

    <TaskList :items="tweets"/>

    <!-- https://www.freecodecamp.org/news/an-introduction-to-dynamic-list-rendering-in-vue-js-a70eea3e321/ -->
    <!-- test Ok.
    <TweetList :items="tweets"/>
    -->
    
    <!-- Reference
        Icon with 2 lines and action, 
        https://vuetifyjs.com/en/components/lists/
    -->

    <v-list two-line subheader>
      <v-subheader inset>Folders</v-subheader>

      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <!--
        @click=""
        -->
        <v-list-item-avatar>
          <v-icon
            :class="[item.iconClass]"
            v-text="item.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-subheader inset>Files</v-subheader>

      <v-list-item
        v-for="item in items2"
        :key="item.title"
      >
        <!--
        @click=""
        -->
        <v-list-item-avatar>
          <v-icon
            :class="[item.iconClass]"
            v-text="item.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <TweetList :items="tweets"/>
  </v-container>
</template>

<script>
import TweetList from './tweet/TweetList'
import TaskList from './task/TaskList'

const test_tweets = [
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

  export default {
    name: 'ContentView',

    components: {
      TaskList,
      TweetList
    },

    data: () => ({
      tweets: test_tweets,
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ]
    }),

  }
</script>
