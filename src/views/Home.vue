<template>
  <div class="home">
    <h1>{{ $t('message.welcome') }}</h1>
    <p>{{ $t('message.description') }}</p>
    <Search @search="handleSearch" />
    <div v-if="results.length">
      <h2>搜索结果</h2>
      <ul>
        <li v-for="(result, index) in results" :key="index">
          {{ result.title }} - 
          <a :href="result.url" target="_blank">下载</a>
          <button @click="playMusic(result.url)">播放</button>
        </li>
      </ul>
    </div>
    <audio ref="audioPlayer" controls style="display: none;">
      <source :src="currentMusicUrl" type="audio/mpeg">
      您的浏览器不支持 audio 元素。
    </audio>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import searchMusic from '@/utils/crawler.js';

export default {
  name: 'Home',
  components: {
    Search
  },
  data() {
    return {
      results: [],
      currentMusicUrl: ''
    };
  },
  methods: {
    async handleSearch(query) {
      this.results = await searchMusic(query);
    },
    playMusic(url) {
      this.currentMusicUrl = url;
      this.$refs.audioPlayer.style.display = 'block';
      this.$refs.audioPlayer.load();
      this.$refs.audioPlayer.play();
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 60px;
}
</style>