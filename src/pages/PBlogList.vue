<template>
  <div>
    <h2 class="text-3xl font-bold text-center mb-6 text-blue-600">Blog List</h2>
    <ul class="space-y-4">
      <li
        v-for="blog in blogs"
        :key="blog.id"
        class="p-4 bg-white shadow-md rounded-lg hover:bg-gray-100"
      >
        <RouterLink
          :to="'/blog-detail/' + blog.id"
          class="text-xl font-semibold text-blue-500 hover:underline"
        >
          {{ blog.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      blogs: [
        { id: 1, title: 'Vue.js Basics', content: 'Introduction to Vue.js' },
        { id: 2, title: 'Vue Router', content: 'Navigating with Vue Router' },
        { id: 3, title: 'Vuex', content: 'State management in Vue.js' },
      ],
    };
  },
};
</script>
