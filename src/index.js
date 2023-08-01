import {initFirestore} from "../src/handlers/initFirestore.js"
import { collectionGroup, query, where, getDocs } from "firebase/firestore";  
import renderCharts from "../src/handlers/renderCharts.js"

// Uses initFirestore to start the connection to firestore database
const db = initFirestore();
console.log(db);

// Test render chart 
renderCharts()

// Get Users Data

console.log("getting a collection of weight logs for the current user")
const testData = query(collection(db, "weight-logs"));
console.log(testData)
const snaphot = await getDocs(testData);
snaphot.forEach((item) => {
  console.log(item)
})



