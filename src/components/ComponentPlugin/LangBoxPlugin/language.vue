<template>
  <el-select v-model="value" placeholder="Select Lang" @change="changeLang">
    <el-option
      v-for="item in flagsCountry"
      :key="item.lang"
      :label="item.country"
      :value="item.lang"
      @click="changeLang(item.lang)">
    </el-option>
  </el-select>
</template>
<script>
  export default {
    data() {
      return {
        flagsCountry: this.$langbox.flagsCountry,
        value: '',
      };
    },
    methods: {
      changeLang() {
        this.$i18n.locale = this.value;
      },
    },
  };
</script>
