<template>
    <form @submit="onSubmit">

        <ion-item>
            <ion-label>Title</ion-label>
            <ion-input :value="todo.title" @input="todo.title = $event.target.value" ></ion-input>
        </ion-item>

        <hr />

        <ion-button type="submit" color="primary" expand="block"> {{mode}} </ion-button>

    </form>
</template>

<script>
export default {
    name: 'todo-form',
    props: {
        mode: {
            type: String,
            required: true
        },
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            if (this.todo.title.trim() == '') {
                this.$store.dispatch('showAlert', {
                    vm: this,
                    alert: {
                        header: 'Error!',
                        message: 'Title is required'
                    }
                });
                return;
            }
            this.$emit('onSubmitHandler', this.todo);
        }
    }
}
</script>