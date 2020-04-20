<template>
  <div class="container home">
    <navbar/>
    <h1>What project have</h1>
    <section class="main-section">
      <h3>Global components</h3>
      <p>Navbar is the component which can be imported into every other components</p>
    </section>
    <section class="main-section">
      <h3>Plugin components</h3>
      <p>We can define the plugin component for component with have some basic data such as language box, select,....</p>
    </section>
    <section class="main-section">
      <h3>Demo multiple Language</h3>
      <lang-box/>
      <el-tag>{{$t('lang.hello')}}</el-tag>
      <el-tag type="warning">{{$t('lang.happy')}}</el-tag>
    </section>
    <section class="main-section">
      <h3>Demo Directive & Filter</h3>
      <b>Directive</b>
      from <el-tag type="warning">nothing</el-tag>
      to
      <div id="demo" v-demo="msg"></div>
      <b>Filter</b>
      Ex: Convert time format from <el-tag type="warning">{{shortTimeAsSeconds}}</el-tag> to <el-tag type="warning">{{shortTimeAsSeconds | convertTime}}</el-tag>
    </section>
    <section class="main-section">
      <h3>Demo HTTP</h3>
      <p> Get API with <b>vue-resource</b> and print the value:</p>
      <p>{{result}}</p>
    </section>
    <section class="main-section">
      <h3>Demo Vuex</h3>
      <p>The <b>circle progress</b> and <b>buttons</b> are in different components, these components are not in any relationship and dont have any direct methods between them. </p>
      <p>Use Vuex technology, the state is in the store, all components can set and get.</p>
      <el-row class="count-box">
        <el-button class="center decrease" type="primary" @click="decrease">-</el-button>
        <progress-circle class="circle-custom"/>
        <el-button class="center increase" type="primary" @click="increase">+</el-button>
      </el-row>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Progress from './progressVuex.vue';

export default {
  name: 'Home',
  components: {
    'progress-circle': Progress,
  },
  data() {
    return {
      options: [{
        value: 'Option1',
        label: 'English',
      }, {
        value: 'Option2',
        label: 'Vietnamese',
      }, {
        value: 'Option3',
        label: 'Japanese',
      }],
      value: '',
      shortTimeAsSeconds: '10-19-1995',
      msg: 'hello!',
      result: null,
    };
  },
  methods: {
    ...mapActions({
      increase: 'increase',
      decrease: 'decrease',
    }),
  },
  created() {
    this.$http.get('https://reqres.in/api/users?page=2').then(res => {
      this.result = res.body;
    });
  },
};
</script>
