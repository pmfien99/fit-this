import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


export function initFirestore() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDeGA4Zb4m45Z10hW2nboL8RHWPGp-80hs",
    authDomain: "weight-tracker-fien.firebaseapp.com",
    databaseURL: "https://weight-tracker-fien-default-rtdb.firebaseio.com",
    projectId: "weight-tracker-fien",
    storageBucket: "weight-tracker-fien.appspot.com",
    messagingSenderId: "965522493801",
    appId: "1:965522493801:web:d2b738b661d0d5661cadf8"
};

  const app = initializeApp(firebaseConfig); 
  const firestoreDB = getFirestore(app);

return firestoreDB;
}

