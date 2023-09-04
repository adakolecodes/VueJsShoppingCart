<template>
  <NavBar />
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  mounted() {
    this.$store.commit('updateCartFromLocalStorage')
  }
}
</script>

<style>

</style>

