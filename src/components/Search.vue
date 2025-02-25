<template>
  <div class="search">
    <input v-model="query" placeholder="请输入搜索关键字" @keyup.enter="searchMusic" />
    <button @click="searchMusic">搜索</button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      query: ''
    };
  },
  methods: {
    searchMusic() {
      // 这里实现搜索逻辑
      this.$emit('search', this.query);
    }
  }
};
</script>

<style scoped>
.search {
  margin-bottom: 20px;
}
</style>