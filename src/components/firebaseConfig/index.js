import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyC2NeItvV0mUpe2wjH1oLeBuIBUKn0Pyhw",
        authDomain: "react-crud-app-f569b.firebaseapp.com",
        databaseURL: "https://react-crud-app-f569b-default-rtdb.firebaseio.com",
        projectId: "react-crud-app-f569b",
        storageBucket: "react-crud-app-f569b.appspot.com",
        messagingSenderId: "185094598143",
        appId: "1:185094598143:web:cc5306d4216756c9794bca",
        measurementId: "G-CE9Y753WTH"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

       return getDatabase(app);

}

export default StartFirebase;