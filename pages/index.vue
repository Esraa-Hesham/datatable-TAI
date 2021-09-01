<!-- Start DataTable -->
<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <!-- Start Filter field-->
        <div class="">
          <select v-model="column">
            <option :value="null">No Column Filter</option>
            <option v-for="col in cols" :key="col">{{ col }}</option>
          </select>
          <input
            type="text"
            v-model="search"
            placeholder="Search"
            class="bg-gray-200 focus:bg-white rounded-lg px-4"
          />
        </div>
        <!-- End Filter field -->
        <!-- Start Hide Columns Section-->
        <div class="flex items-center justify-center my-5 px-10">
          <h3>Check The Column To Hide</h3>
          <div class="form-check mx-10">
            <input
              type="checkbox"
              id="id"
              value="id"
              @change="changeColumns"
              v-model="selectedColumes.id"
            />
            <label class="form-check-label"> ID </label>
          </div>
          <div class="form-check mx-10">
            <input
              type="checkbox"
              id="username"
              value="username"
              @change="changeColumns"
              v-model="selectedColumes.username"
            />
            <label class="form-check-label"> User Name </label>
          </div>
          <div class="form-check mx-10">
            <input
              type="checkbox"
              id="email"
              value="email"
              @change="changeColumns"
              v-model="selectedColumes.email"
            />
            <label class="form-check-label"> Email </label>
          </div>
          <div class="form-check mx-10">
            <input
              type="checkbox"
              id="phone"
              value="phone"
              @change="changeColumns"
              v-model="selectedColumes.phone"
            />
            <label class="form-check-label"> Phone </label>
          </div>
          <div class="form-check mx-10">
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
        <!-- End Hide Columns Section -->
        <div
          class="
            shadow
            overflow-hidden
            border-b border-gray-200
            sm:rounded-lg
            my-10
          "
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                  v-show="selectedColumes.id"
                >
                  ID
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                  v-show="selectedColumes.username"
                >
                  User Name
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                  v-show="selectedColumes.email"
                >
                  Email
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                  v-show="selectedColumes.phone"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                  v-show="selectedColumes.website"
                >
                  Website
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="person in rows" :key="person.id">
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  v-show="selectedColumes.id"
                >
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ person.id }}
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  v-show="selectedColumes.username"
                >
                  <div class="text-sm text-gray-900">{{ person.username }}</div>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  v-show="selectedColumes.email"
                >
                  <div class="text-sm text-gray-900">{{ person.email }}</div>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  v-show="selectedColumes.phone"
                >
                  <div class="text-sm text-gray-900">{{ person.phone }}</div>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  v-show="selectedColumes.website"
                >
                  <div class="text-sm text-gray-900">{{ person.website }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- End DataTable -->
</template>

<script>
export default {
  data() {
    return {
      search: null,
      column: null,
    }
  },
  computed: {
    selectedColumes() {
      return this.$store.getters.selectedColumes
    },
    data() {
      return this.$store.getters.getApiData
    },
    cols() {
      return this.data.length >= 1 ? Object.keys(this.selectedColumes) : []
    },
    rows() {
      if (!this.data.length) {
        return []
      }

      return this.data.filter((item) => {
        const props =
          this.search && this.column ? [item[this.column]] : Object.values(item)

        return props.some(
          (prop) =>
            !this.search ||
            (typeof prop === 'string'
              ? prop.toLowerCase().includes(this.search)
              : prop.toLowerCase().toString(10).includes(this.search))
        )
      })
    },
  },
  mounted() {
    console.log('helloooooooooooooooo')
    this.$store.dispatch('getData')
  },
  methods: {
    changeColumns(event) {
      this.$store.commit('setColumes', {
        [event.target.value]: event.target.checked,
      })
    },
  },
}
</script>0
