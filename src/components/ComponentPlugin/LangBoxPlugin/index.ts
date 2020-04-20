// import Language from './language.vue';

// const langBoxStore = {
//   flagsCountry: [
//     {
//       country: 'English',
//       icon: 'flag-icon flag-icon-gb',
//       lang: 'en',
//     },
//     {
//       country: 'VietNamese',
//       icon: 'flag-icon flag-icon-vn',
//       lang: 'vn',
//     },
//     {
//       country: 'Japanese',
//       icon: 'flag-icon flag-icon-vn',
//       lang: 'ja',
//     },
//   ],
// };

// const LanguagePlugin = {
//   install(Vue) {
//     Vue.mixin({
//       data() {
//         return {
//           langBoxStore,
//         };
//       },
//     });
//     Object.defineProperty(Vue.prototype, '$langbox', {
//       get() {
//         return this.$root.langBoxStore;
//       },
//     });
//     Vue.component('lang-box', Language);
//   },
// };

// export default LanguagePlugin;
