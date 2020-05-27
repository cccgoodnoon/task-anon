<template>
  <v-app>
    <v-content class="d-flex align-center">
      <v-row no-gutters >
        <v-col col=12 md=2>
          <v-card
            class="mr-3 pa-0"
            outlined
            tile
          >
          <NavigationView/>
          </v-card>
        </v-col>

        <v-col col=12 >
          <v-card
            class="pa-0"
            outlined
            tile>
            <router-view></router-view>
          </v-card>
        </v-col>
        
        <v-col lg="2" md=2>
          <v-card
            class="pa-0"
            outlined
            tile
          >
          <ActionView/>
          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import NavigationView from './components/NavigationView';
import ActionView from './components/ActionView';

export default {
  name: 'App',

  components: {
    NavigationView,
    ActionView,
  },

  data: () => ({
    
  }),
};
</script>

<style>
  .col1 {
    padding: 0px;
    margin: 0px;
  }
</style>