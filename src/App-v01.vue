<template>
  <v-app>
    <!--
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    -->

    <v-content class="d-flex align-center">
      
      <!-- suggest use vcard according to vuetify document example --> 
      <v-row no-gutters>
        <v-col col=12 md=2>
          <v-card
            class="pa-2"
            outlined
            tile
          >
          <NavigationView/>
          </v-card>
        </v-col>
        <v-col >
          <v-card
            class="pa-2"
            outlined
            tile
          >

          <div class="column">
            <TweetItem v-for="tweet in tweets" :key="tweet.name"  :tweet="tweet"/>
          </div>

            <ContentView/>
            Variable width content
            <HelloWorld/>
          </v-card>
        </v-col>
        <v-col lg="2" md=2>
          <v-card
            class="pa-2"
            outlined
            tile
          >
          <ActionView/>
          </v-card>
        </v-col>
      </v-row>

      <!--
        <HelloWorld/>
      -->
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import NavigationView from './components/NavigationView';
import ActionView from './components/ActionView';
import TweetItem from './components/tweet/TweetItem';
import ContentView from './components/ContentView';

export default {
  name: 'App',

  components: {
    NavigationView,
    ActionView,
    TweetItem,
    ContentView,
    HelloWorld,
  },

  // data: () => ({
    //
  // }),

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
      tweet: Object
    }
};
</script>
