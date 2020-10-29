import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzD0f7U4Zx1hzX5niSd1cHVn8-a__StEw",
  authDomain: "learning-63a7a.firebaseapp.com",
  databaseURL: "https://learning-63a7a.firebaseio.com",
  projectId: "learning-63a7a",
  storageBucket: "learning-63a7a.appspot.com",
  messagingSenderId: "483138480956",
  appId: "1:483138480956:web:3e83a03b9a72be71700c39",
  measurementId: "G-HFCTME5G9K",
};

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
