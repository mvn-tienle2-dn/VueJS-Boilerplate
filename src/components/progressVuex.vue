<template>
  <div>
    <el-progress type="circle" :percentage="counter"></el-progress>
  </div>
</template>
<script>
  import {  mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        counter: 'counter',
      }),
    },
  };
</script>
