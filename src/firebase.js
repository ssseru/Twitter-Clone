import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB4-j3eMb3wOW7ffOHzw00Up0S4j6nqcdU",
  authDomain: "twitter-clone-2acd3.firebaseapp.com",
  projectId: "twitter-clone-2acd3",
  storageBucket: "twitter-clone-2acd3.appspot.com",
  messagingSenderId: "239820651680",
  appId: "1:239820651680:web:57db904ee6a13e6fa79dc5",
  measurementId: "G-ZHWT0CT9PH"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore();

  export default db