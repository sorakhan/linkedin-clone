// // import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// // import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import { getFirestore } from "firebase/firestore";
// import "firebase/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA7t0Evvw9HPBP409yaMxWeukF2OL4ad1w",
//   authDomain: "linkedin-clone-reactapp.firebaseapp.com",
//   projectId: "linkedin-clone-reactapp",
//   storageBucket: "linkedin-clone-reactapp.appspot.com",
//   messagingSenderId: "283455352528",
//   appId: "1:283455352528:web:2786bacf761ac92693b8d5",
//   measurementId: "G-GNLLFZRF9J",
// };
// const app = initializeApp(firebaseConfig);
// const db = firebase.firestore();

// // const auth = firebase.auth();

// // export { db, auth};
// export { db, app };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyA7t0Evvw9HPBP409yaMxWeukF2OL4ad1w",
  authDomain: "linkedin-clone-reactapp.firebaseapp.com",
  projectId: "linkedin-clone-reactapp",
  storageBucket: "linkedin-clone-reactapp.appspot.com",
  messagingSenderId: "283455352528",
  appId: "1:283455352528:web:2786bacf761ac92693b8d5",
  measurementId: "G-GNLLFZRF9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const dummy = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { app };
