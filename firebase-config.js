import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



  const firebaseConfig={
    apiKey: "AIzaSyDR7kl889CDUrbKxoTInK_XJ5N8j4nEEZo",
    authDomain: "myfinalproject-458fc.firebaseapp.com",
    projectId: "myfinalproject-458fc",
    storageBucket: "myfinalproject-458fc.appspot.com",
    messagingSenderId: "564250655035",
    appId: "1:564250655035:web:807a5e6bf013e3f3175f1e",
    measurementId: "G-6XZC52GF78"
  }

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app;