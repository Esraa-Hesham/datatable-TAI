<!-- Start Hide Columns Section -->
<template>
  <div class="flex items-center justify-center my-5 px-10">
    <h3 class="float-left flex text-indigo-900 text-lg font-medium">
      Check The Column To Hide
    </h3>
    <div class="float-right flex">
      <div class="form-check mx-5 bg-gray-100 px-3 py-2 rounded-xl">
        <input
          type="checkbox"
          id="id"
          value="id"
          @change="changeColumns"
          v-model="selectedColumes.id"
        />
        <label class="form-check-label"> ID </label>
      </div>
      <div class="form-check mx-5 bg-gray-100 px-3 py-2 rounded-xl">
        <input
          type="checkbox"
          id="username"
          value="username"
          @change="changeColumns"
          v-model="selectedColumes.username"
        />
        <label class="form-check-label"> User Name </label>
      </div>
      <div class="form-check mx-5 bg-gray-100 px-3 py-2 rounded-xl">
        <input
          type="checkbox"
          id="email"
          value="email"
          @change="changeColumns"
          v-model="selectedColumes.email"
        />
        <label class="form-check-label"> Email </label>
      </div>
      <div class="form-check mx-5 bg-gray-100 px-3 py-2 rounded-xl">
        <input
          type="checkbox"
          id="phone"
          value="phone"
          @change="changeColumns"
          v-model="selectedColumes.phone"
        />
        <label class="form-check-label"> Phone </label>
      </div>
      <div class="form-check mx-5 bg-gray-100 px-3 py-2 rounded-xl">
        <input
          type="checkbox"
          id="website"
          value="website"
          @change="changeColumns"
          v-model="selectedColumes.website"
        />
        <label class="form-check-label"> Website </label>
      </div>
    </div>
  </div>
  <!-- End Hide Columns Section -->
</template>

<script>
export default {
  methods: {
    changeColumns(event) {
      this.$store.commit('setColumes', {
        [event.target.value]: event.target.checked,
      })
    },
  },
  computed: {
    selectedColumes() {
      return this.$store.getters.selectedColumes
    },
  },
}
</script>
