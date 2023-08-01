import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

function setupFirebase() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig); 
  const db = getFirestore(app);
  const weightRef = collection(db, "logs");
  console.log(weightRef)
}



// Generate Weight Chart
function generateWeightChart() {
  console.log("Work")
}

export default setupFirebase


