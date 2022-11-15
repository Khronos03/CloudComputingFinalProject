import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDIMwDzjDTjcpMg1Ab67u3sedbWmBY6FB8",
  authDomain: "cloudcomputingsd-59c48.firebaseapp.com",
  databaseURL: "https://cloudcomputingsd-59c48-default-rtdb.firebaseio.com",
  projectId: "cloudcomputingsd-59c48",
  storageBucket: "cloudcomputingsd-59c48.appspot.com",
  messagingSenderId: "658426957898",
  appId: "1:658426957898:web:01aa24f0ff8ba2b11756b3",
  measurementId: "G-GH25S8DN6J"
};

//Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const firestoreDb = fb.firestore();