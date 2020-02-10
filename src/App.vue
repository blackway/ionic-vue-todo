<template>
  <div id="app">
    <ion-app>

      <ion-vue-router />
      
    </ion-app>
  </div>
</template>

<script>
export default {
  created() {
    if (localStorage) {
      this.$store.dispatch('setTodos', localStorage.getItem('todos'));
    }
  }
}
</script>