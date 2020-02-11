<template>
  <div>
    <div class="ion-page">

        <header-component title="TODO APP" />

        <ion-content class="ion-padding"  center text-center>

          <!-- List of Text Items -->
          <ion-list>

            <!-- Sliding item with text options on both sides -->
            <ion-item-sliding v-for="list in todos" :key="list.id">

              <ion-item>
                <ion-checkbox slot="start" :checked="list.done" @click="toggleTodo(list)"></ion-checkbox>
                <ion-label>{{list.title}}</ion-label>
              </ion-item>

              <ion-item-options side="end">
                <ion-item-option color="danger" @click="deleteTodo(list)">
                  <ion-icon slot="icon-only" name="trash"></ion-icon>
                </ion-item-option>
                <ion-item-option>
                    <ion-icon slot="icon-only" name="create" @click="gotoEditTodo(list)"></ion-icon>
                </ion-item-option>
              </ion-item-options>

            </ion-item-sliding>

          </ion-list>

          <ion-label v-if="todos.length == 0">No todo(s) found!</ion-label>

          <!-- Fixed Floating Action Button that does not scroll with the content -->
          <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <router-link to="/new">
              <ion-fab-button>
                <ion-icon name="add"></ion-icon>
              </ion-fab-button>
            </router-link>
          </ion-fab>
          
        </ion-content>


        <footer-component />

      </div>
  </div>
 
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'home',
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'todos',
    ])
  },
  methods: {
    toggleTodo(list) {
      const vm = this;
      // add timeOut to sync ionic UI state change
      setTimeout(function() {
        list.done = !list.done;
        vm.$store.dispatch('editTodo', {
          mode: 'Edit',
          todo: list
        })
      }, 100);
    },
    gotoEditTodo(list) {
      this.$router.push({ name: 'edit', params: { id: list.id } })
    },
    deleteTodo(list) {
      return this.$ionic.alertController
        .create({
          header: 'Confirm Delete!',
          message: '<strong>Are you sure?</strong>!!!',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {

              },
            },
            {
              text: 'Okay',
              handler: () => {
                this.$store.dispatch('deleteTodo', list);
              },
            },
          ],
        })
        .then(a => a.present())
    }
  },
  created() {

  }
}
</script>
