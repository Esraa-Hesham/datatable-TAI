<!-- Start Filter Section -->
<template>
  <div class="px-10 bg-gray-200 mb-3 py-3">
    <h3
      class="
        float-left
        text-indigo-900
        font-extrabold
        text-lg text-center
        hidden
        sm:block
      "
    >
      Users Data Table
    </h3>
    <div class="float-right">
      <select
        class="px-4 h-9 text-indigo-900 rounded-l-xl font-semibold"
        :value="column"
        @change="setColumn"
      >
        <option value="">No Column Filter</option>
        <option v-for="col in cols" :key="col">{{ col }}</option>
      </select>
      <input
        type="text"
        @keyup="search"
        :value="getSearch"
        placeholder="Search"
        class="
          font-semibold
          bg-gray-100
          focus:bg-white
          focus:ring-2 focus:ring-gray-300
          pl-5
          h-9
          rounded-r-xl
          -ml-1
          placeholder-opacity-25
        "
      />
    </div>
  </div>
  <!-- End Filter Section -->
</template>

<script>
export default {
  methods: {
    search(event) {
      this.$store.commit('setSearch', event.target.value)
    },
    setColumn(event) {
      this.$store.commit('setColumn', event.target.value)
    },
  },
  computed: {
    getSearch() {
      return this.$store.getters.getSearch
    },
    column() {
      return this.$store.getters.getColumn
    },
    selectedColumes() {
      return this.$store.getters.selectedColumes
    },
    cols() {
      return Object.keys(this.selectedColumes)
    },
  },
}
</script>
