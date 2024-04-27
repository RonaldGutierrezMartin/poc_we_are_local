<template>
  <ion-page>
    
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
        <a href="#" onclick="signOut();">Sign out</a>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <post v-for="post in posts" :title="post.title" subtitle="Promoción" :img="post.image" :description="post.description" :username="post.username" :avatar="post.avatar"></post>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import post from '@/components/Post.vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';
  import {ref} from "vue";
  //Variables
  let posts = ref([]);
  //Functions
  function getHomePosts(){

    fetch("https://662d024b0547cdcde9dfb6d9.mockapi.io/api/post").then(response =>response.json()).then(response=>posts.value=response).catch()
  }
  getHomePosts();
</script>
