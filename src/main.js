import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      welcome: 'Welcome to music-crawler',
      description: 'This is a music search and playback website.'
    }
  },
  zh: {
    message: {
      welcome: '欢迎来到 music-crawler',
      description: '这是一个音乐搜索和播放网站。'
    }
  }
};

const i18n = new VueI18n({
  locale: 'zh', // 设置默认语言
  messages,
});

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')