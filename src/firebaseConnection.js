import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyABAHoxNxdSbC9HXTz1o8AxX8pfsbj0Mk4",
  authDomain: "meuapp-fa12b.firebaseapp.com",
  databaseURL: "https://meuapp-fa12b-default-rtdb.firebaseio.com",
  projectId: "meuapp-fa12b",
  storageBucket: "meuapp-fa12b.appspot.com",
  messagingSenderId: "332850747636",
  appId: "1:332850747636:web:31a6999285efe29b84e6a1",
  measurementId: "G-LFCJFM0S46"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase;
