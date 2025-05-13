<template>
    <div>
      <input
        type="text"
        v-model="search"
        placeholder="搜尋文章"
        class="form-control mb-3"
      />
      <b-container>
        <b-row>
        <b-card
        v-for="blog in filteredBlogs"
        :key="blog.id"
        :title="blog.title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{ blog.body }}
        </b-card-text>
  
        <b-button href="#" variant="primary">看更多</b-button>
      </b-card>
      </b-row>
      </b-container>
      
        
    </div>    
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import axios from 'axios'
  
  const blogs = ref([])
  const search = ref('')
  
  const filteredBlogs = computed(() =>
    blogs.value.filter((blog) =>
      blog.title.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  
  onMounted(async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      blogs.value = res.data.slice(0, 10)
    } catch (error) {
      console.error('取得文章失敗：', error)
    }
  })
  </script>
  
  <style scoped>
  input {
    padding: 8px;
    font-size: 16px;
  }
  </style>
  