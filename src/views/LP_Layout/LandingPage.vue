<template>
  <div class="bg-gray-200">
    <navigation-bar/>
      <Home/>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import NavigationBar from './../../components/LandingPages/NavigationBar.vue'
import HeroSection from './../../components/LandingPages/Home.vue'

import '@assets/custom-theme/styles.css'

@Component({
  name: 'LandingPage',
  components: {
    NavigationBar,
    Home
  }
})

export default class extends Vue {
  private createdTimes = 0
  created() {
    this.createdTimes = 1
  }
}
</script>

<style lang="postcss">
.form-input {
  @apply rounded-lg
              ring-inset
              focus:outline-none
              focus:ring-2
              focus:ring-green-400
              focus:border-transparent
              bg-gray-200
              px-4
              py-3
              w-full
}
.submit-button {
  @apply px-6
            py-3
            text-green-900
            rounded-lg
            font-bold
            bg-green-400
            hover:bg-green-500 hover:shadow-md
}
</style>