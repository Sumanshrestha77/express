<template>
  <div class="flex flex-col justify-center mx-48">
    <div class="mb-4">
      <!-- Dropdown for Sorting -->
      <select
        v-model="sortOrder"
        @change="sortData"
        class="p-2 border border-gray-300 flex justify-start rounded"
      >
        <option value="asc">Sort by User ID (Ascending)</option>
        <option value="desc">Sort by User ID (Descending)</option>
      </select>
    </div>
    <div class="w-full rounded-lg shadow-md overflow-hidden">
      <table class="min-w-full leading-normal">
        <thead>
          <tr class="bg-gray-800 animation duration-300 ease-in-out">
            <th
              class="px-5 text-white py-3 text-center border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              scope="col"
            >
              User ID
            </th>
            <th
              class="px-5 py-3 text-white text-center border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              scope="col"
            >
              ID
            </th>
            <th
              class="px-5 py-3 text-white text-center border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              scope="col"
            >
              Title
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in sortedData"
            :key="item.id"
            class="hover:bg-gray-100"
          >
            <td class="px-5 py-5 border-b border-gray-200 text-sm">
              {{ item.userId }}
            </td>
            <td class="px-5 py-5 border-b border-gray-200 text-sm">
              {{ item.id }}
            </td>
            <td class="px-5 py-5 border-b border-gray-200 text-sm">
              {{ item.title }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [], // Data will be stored here
      sortOrder: "asc", // Default sort order
    };
  },
  created() {
    // Fetch data when the component is created
    console.log("Component created: Fetching data...");
    this.fetchData();
  },
  computed: {
    sortedData() {
      return [...this.data].sort((a, b) => {
        if (this.sortOrder === "asc") {
          return a.userId - b.userId;
        } else {
          return b.userId - a.userId;
        }
      });
    },
  },
  methods: {
    async fetchData() {
      try {
        console.log("Fetching data from API...");
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log("Data received from API:", response.data); // Log the data received
        this.data = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    sortData() {
      // Trigger sorting when dropdown value changes
      this.sortedData; // Access computed property to trigger reactivity
    },
  },
};
</script>

<style scoped>
/* Add any styles here */
</style>
