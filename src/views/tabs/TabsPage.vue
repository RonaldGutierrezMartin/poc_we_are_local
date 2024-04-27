<template>
  <ion-page>
    
    <ion-tabs>
      
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="home"></ion-icon>
          <!-- <ion-label>Home</ion-label> -->
        </ion-tab-button>

        <ion-tab-button tab="search" href="/tabs/search">
          <ion-icon aria-hidden="true" :icon="search" />
          <!-- <ion-label>Tab 2</ion-label> -->
        </ion-tab-button>

        <ion-tab-button tab="newpost" href="/tabs/newpost">
          <ion-icon aria-hidden="true" :icon="addCircle" />
          <!-- <ion-label>Tab 3</ion-label> -->
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile/123">
          <ion-icon aria-hidden="true" :icon="person" />
          <!-- <ion-label>Tab 3</ion-label> -->
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { home, search, addCircle,person } from 'ionicons/icons';

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
</script>
