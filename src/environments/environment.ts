// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBrH5MQO58Heaz1REIS2upkatdg7AgAgNw',
    authDomain: 'semester-project-angular.firebaseapp.com',
    databaseURL: 'https://semester-project-angular.firebaseio.com',
    projectId: 'semester-project-angular',
    storageBucket: 'semester-project-angular.appspot.com',
    messagingSenderId: '434689440789'
  }
};
