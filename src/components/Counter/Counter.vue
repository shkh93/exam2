<template>
  <div class="p-4 space-y-4">
    <div
      v-for="(counter, index) in counters"
      :key="index"
      class="p-4 border rounded-lg shadow-sm text-center"
    >
      <h3 class="text-lg font-semibold mb-2">Counter {{ index + 1 }}</h3>
      <p class="text-2xl font-bold mb-4">{{ counter.value }}</p>
      <div class="space-x-2">
        <button
          @click="increment(index)"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increase
        </button>
        <button
          @click="decrement(index)"
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrease
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const App = {
  setup() {
    const counters = ref([
      { value: 0 },
      { value: 0 },
      { value: 0 }
    ]);

    const increment = (index) => {
      counters.value[index].value++;
    };

    const decrement = (index) => {
      counters.value[index].value--;
    };

    return { counters, increment, decrement };
  }
};

export default App;
</script>
