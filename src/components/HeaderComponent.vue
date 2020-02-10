<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons >
            <ion-back-button></ion-back-button>
            </ion-buttons>
            
            <ion-title> {{title}} </ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script>
export default {
    name: 'header-component',
    props: {
        title: {
            type: String
        }
    }
}
</script>