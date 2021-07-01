// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebaseConfig:{
  apiKey: 'AIzaSyC_MllcWOGxP47RVcYg2W-vNob2X-Bb38U',
  authDomain: 'newscrud-a317b.firebaseapp.com',
  projectId: 'newscrud-a317b',
  storageBucket: 'newscrud-a317b.appspot.com',
  messagingSenderId: '576203341873',
  appId: '1:576203341873:web:bf3d3e419f9b2970cd1510',
  measurementId: 'G-27NMWWGZPP'
},
newsApiConfig:{
  apiURL: 'https://newsapi.org/v2/',
  apiKey: 'db038e5e8632418a916c968a172c288a'
}

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
