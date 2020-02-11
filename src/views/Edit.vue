<template>
  <div class="ion-page">

    <header-component title="Edit TODO" />

    <ion-content class="ion-padding">

        <todo-form mode="Edit" :todo="todo" @onSubmitHandler="onSubmit" />
      
    </ion-content>

    <footer-component />

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoForm from '@/components/TodoForm.vue';
export default {
    name: 'edit',
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
            mode: 'Edit',
            todoId: ''
        }
    },
    methods: {
        onSubmit(todo) {

            this.$store.dispatch('editTodo', {
                mode: this.mode,
                todo: todo
            });

            this.$store.dispatch('showAlert', {
                vm: this,
                alert: {
                    header: 'Success!',
                    message: 'Todo successfully updated'
                }
            });

        }
    },
    created() {
        this.todoId = this.$route.params.id;
        this.$store.dispatch('findTodo', this.todoId);
    }
}
</script>
