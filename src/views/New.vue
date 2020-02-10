<template>
  <div class="ion-page">

    <header-component title="New TODO" />

    <ion-content class="ion-padding">

        <todo-form mode="New" :todo="todo" @onSubmitHandler="onSubmit" />
      
    </ion-content>

    <footer-component />

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoForm from '@/components/TodoForm.vue';
export default {
    name: 'new',
    components: {
        TodoForm
    },
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters([
        'todo',
        ])
    },
    data() {
        return {
            mode: 'New'
        }
    },
    methods: {
        onSubmit(todo) {

            this.$store.dispatch('addTodo', {
                mode: this.mode,
                todo: todo
            });

            this.$store.dispatch('showAlert', {
                vm: this,
                alert: {
                    header: 'Success!',
                    message: 'Todo successfully added'
                }
            });

        }
    },
    created() {
        this.$store.dispatch('setTodo', {
            mode: this.mode
        });
    }
}
</script>
