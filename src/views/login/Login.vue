<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <IonList>
        <IonItem v-if="loginNotMatch">
          <p>Email o contraseña no coinciden</p>
        </IonItem>
        <IonItem>
          <IonInput
            type="email"
            label="Email"
            label-placement="stacked"
            placeholder="Enter a valid email"
            v-model="emailInputValue"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            type="password"
            label="Password"
            label-placement="stacked"
            placeholder="Enter a valid password"
            v-model="passwordInputValue"
          ></IonInput>
        </IonItem>
        <IonItem>
          
          <div id="g_id_onload" data-client_id="134140376946-v5e02hfqc87ted7afn2npao3asnbdth0.apps.googleusercontent.com" data-context="signin" data-ux_mode="popup" data-callback="onSingIn" data-auto_prompt="false"></div>
          <div class="g_id_signin"data-type="standard" data-shape="rectangular" data-theme="outline" data-text="signin_with" data-size="large" data-logo_alignment="left"></div>
          <div class="pro-data hidden"></div>


          <!-- <div id="g_id_onload"data-client_id="134140376946-v5e02hfqc87ted7afn2npao3asnbdth0.apps.googleusercontent.com"data-context="signin"data-ux_mode="popup"data-callback="handleCredentialResponse"data-auto_prompt="true"></div> -->
        </IonItem>
        <IonButton expand="block" @click="checkUserData">Login</IonButton>
      </IonList>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
  import router from "@/router";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonList,
    IonItem,
    IonButton,
  } from "@ionic/vue";
  import { ref } from "vue";

  import {GoogleAuth, User} from '@codetrix-studio/capacitor-google-auth';

  // const googleLogin = document.createElement("script");
  // googleLogin.setAttribute("src","https://apis.google.com/js/platform.js");
  // document.head.appendChild(googleLogin);

  let recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('src', 'https://accounts.google.com/gsi/client')
  document.head.appendChild(recaptchaScript)

  // Variables
  let emailInputValue = "";
  let passwordInputValue = "";
  let loginNotMatch = ref(false);
  let defaultUser = {
    createdAt: "2024-04-26T20:07:15.857Z",
    name: "Blanca Thompson",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/62.jpg",
    birthdate: "1970-05-28T18:22:55.971Z",
    address: "Champlin Forks",
    municipality: "Missouri",
    email: "blanca@example.com",
    id: "2",
    password: "123",
  };

  //Functions
  function checkUserData() {
    console.log(emailInputValue);
    console.log(passwordInputValue);
    if (emailInputValue == defaultUser.email && passwordInputValue == defaultUser.password) {
      router.push("/tabs/profile/123")
      
    }else {
      loginNotMatch.value = true;
    }
  }

  // const  ngOnInit= async () =>{
  //     GoogleAuth.initialize();
  // }
  // const signIn = async () => {
  //   //User Authentication
  //   const user: User = await GoogleAuth.signIn();
  // }

  // function onSignIn(googleUser) {
  //   console.log(googleUser)
  // // var profile = googleUser.getBasicProfile();
  // // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  // // console.log('Name: ' + profile.getName());
  // // console.log('Image URL: ' + profile.getImageUrl());
  // // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  
  // let id_token = googleUser.getAuthResponse().id_token;
  // }



  window.onSingIn = (response) => {console.log(response)};
// const callback = (response) => {
//   const userData = decodeCredential(response.credential);
//   checkUser(userData);
// };

// declare global {
//   interface Window {
//     onSingIn: (response: any) => void;
//   }
// }


// window.gapi.client.init({
//   clientId:'Your Client ID',
//   scope: "email",
//   plugin_name:'App Name that you used in google developer console API'
// })

</script>
<!-- <script src="https://apis.google.com/js/platform.js" async defer></script> -->
