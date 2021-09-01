<template>
  <div class="">
    <select :value="column" @change="setColumn">
      <option value="">No Column Filter</option>
      <option v-for="col in cols" :key="col">{{ col }}</option>
    </select>
    <input
      type="text"
      @keyup="search"
      :value="getSearch"
      placeholder="Search"
      class="bg-gray-200 focus:bg-white rounded-lg px-4"
    />
  </div>
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

<style>
</style>
