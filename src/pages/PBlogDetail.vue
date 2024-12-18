<template>
  <div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-3xl font-bold mb-4 text-blue-600">{{ blog?.title }}</h2>
    <p class="text-gray-700 text-lg mb-6">{{ blog?.content }}</p>
    <RouterLink
      to="/blog-list"
      class="inline-block text-blue-500 hover:underline"
    >
    
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  props: ['id'],
  data() {
    return {
      blogs: [
        { id: 1, title: 'Vue.js Basics', content: 'Introduction to Vue.js' },
        { id: 2, title: 'Vue Router', content: 'Navigating with Vue Router' },
        { id: 3, title: 'Vuex', content: 'State management in Vue.js' },
      ],
    };
  },
  computed: {
    blog() {
      return this.blogs.find((b) => b.id === parseInt(this.id));
    },
  },
};
</script>
