<template>
  <div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>
<script>
  import * as types from './store/types';
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';


  export default Vue.extend({
    name: 'example',
    data() {
      return {
      };
    },
  });
</script>
