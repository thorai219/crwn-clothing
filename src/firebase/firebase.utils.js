import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqdPoJe1eMM8rDTgbsY4TCRnAky9Y4SvQ",
  authDomain: "crwn-db-ed492.firebaseapp.com",
  projectId: "crwn-db-ed492",
  storageBucket: "crwn-db-ed492.appspot.com",
  messagingSenderId: "25670126761",
  appId: "1:25670126761:web:a96b464f5d3a413b37edb8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
