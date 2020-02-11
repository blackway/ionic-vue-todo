<template>
  <div id="app">
    <ion-app>
      
      <!--id attribute is required to link ion-menu's content-id attribute-->
      <ion-menu side="start" menuId="first" content-id="main" >
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item @click="navigate('home')"> Home </ion-item>
            <ion-item  @click="navigate('about')"> About </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
      
      <!--id attribute is required to link ion-menu's content-id attribute-->
      <ion-vue-router id="main" />


  </ion-app>

  <ion-menu-controller></ion-menu-controller>

  </div>
</template>

<script>
export default {
  methods: {
    navigate(newRouteName) {
      document.querySelector('ion-menu-controller').close();
      const currentRouteName = this.$router.currentRoute.name;
      // prevent duplicate route navigation
      if (currentRouteName != newRouteName) {
        this.$router.push({name: newRouteName});
      }
    }
  },
  created() {
    if (localStorage) {
      this.$store.dispatch('setTodos', localStorage.getItem('todos'));
    }
  }
}
</script>