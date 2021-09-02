<!-- Start DataTable -->
<template>
  <div class="flex flex-col">
    <!-- Start Filter field-->
    <DataTableFilterInput />
    <!-- End Filter field -->
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <!-- Start Hide Columns Section-->
        <DataTableHideColumns />
        <!-- End Hide Columns Section -->
        <div
          class="
            shadow
            overflow-hidden
            border-b border-gray-300
            sm:rounded-lg
            my-10
          "
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-300">
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
  computed: {
    search() {
      return this.$store.getters.getSearch
    },
    column() {
      return this.$store.getters.getColumn
    },
    selectedColumes() {
      return this.$store.getters.selectedColumes
    },
    data() {
      return this.$store.getters.getApiData
    },
    rows() {
      if (!this.data.length) {
        return []
      } else if (!this.column) {
        return this.data
      }

      return this.data.filter((item) => {
        const props =
          this.search && this.column ? [item[this.column]] : Object.values(item)

        return props.some(
          (prop) =>
            !this.search ||
            (typeof prop === 'string'
              ? prop.toLowerCase().includes(this.search)
              : prop.toString().toLowerCase().includes(this.search))
        )
      })
    },
  },
  mounted() {
    this.$store.dispatch('getData')
  },
}
</script>
