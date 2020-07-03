  
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCEnbaiBpyuKxQuCscAh9SfgX414EzjvFI",
  authDomain: "stock-trade-963bf.firebaseapp.com",
  databaseURL: "https://stock-trade-963bf.firebaseio.com/",
  projectId: "stock-trade-963bf",
  storageBucket: "stock-trade-963bf.appspot.com",
  messagingSenderId: "904285018709",
  appId: "1:904285018709:web:9a76419fc1cfa8997852dc",
  measurementId: "G-YKH08PQBPQ"
};

  firebase.initializeApp(firebaseConfig);



  export default firebase