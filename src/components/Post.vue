<template>
    <ion-card>
        <ion-list>
            <ion-item>
                <ion-avatar aria-hidden="true" slot="start">
                    <img :src="avatar" alt="user avatar">
                </ion-avatar>
                <ion-label>{{ username }}</ion-label>
            </ion-item>
        </ion-list>
        <img :src="img" :alt="imgAlt">
        <ion-card-header>
            <ion-card-title>{{ title }}</ion-card-title>
            <ion-card-subtitle>{{ subtitle }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <p>{{ description }}</p>
        </ion-card-content>
    </ion-card>
</template>
<script setup>
    import { IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle, IonList, IonItem, IonAvatar,IonLabel } from '@ionic/vue';

    let props = defineProps({
        avatar:String,
        username:String,
        img:String,
        imgAlt:String,
        title:String,
        subtitle:String,
        description:String
    })
</script>