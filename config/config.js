import firebase from 'firebase';


//Api details

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCChNH1SzuIPM18Os_TWVcOyYVW0s9YkTI",
    authDomain: "myproject-427eb.firebaseapp.com",
    projectId: "myproject-427eb",
    storageBucket: "myproject-427eb.appspot.com",
    messagingSenderId: "647386487676",
    appId: "1:647386487676:web:cd95b7d6b20153bfe762f9",
    measurementId: "G-2F9FS900JJ"
  };



firebase.initializeApp(config)

 export const f = firebase;
 export const database = firebase.database();
 export const auth = firebase.auth();
 export const storage = firebase.storage();