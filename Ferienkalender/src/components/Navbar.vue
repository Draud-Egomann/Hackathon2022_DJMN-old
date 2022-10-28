<template>
  <div>
    <section class="w-full mx-auto">
      <div class="relative bg-gray-200 p-2">
        <img src="../assets/logo.jpg" alt="Projekt Ferienplanner" class="w-64 hidden lg:inline" />
        <h3 class="inline lg:hidden">Projekt Ferienplanner</h3>
        <router-link to="/" class="btn-Header m-2 inline-block text-lg">Kalendar
        </router-link>
        <router-link to="/statistic" class="btn-Header m-2 inline-block text-lg">Statistik
        </router-link>
        <router-link to="/" class="btn-Header m-2 inline-block text-lg">Anfragen
        </router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  setup() { },
  mounted() { },
  methods: {},
});
</script>

<style lang="css" scoped>

</style>