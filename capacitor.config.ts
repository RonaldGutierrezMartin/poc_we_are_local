import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'poc_we_are_local',
  webDir: 'dist',
  server:{androidScheme:"https"},
  plugins:{"GoogleAuth": {
    "scopes": [
      "profile",
      "email"
    ],
    "serverClientId": "REPLACEME.apps.googleusercontent.com",
    "forceCodeForRefreshToken": true},
  }
};

export default config;
