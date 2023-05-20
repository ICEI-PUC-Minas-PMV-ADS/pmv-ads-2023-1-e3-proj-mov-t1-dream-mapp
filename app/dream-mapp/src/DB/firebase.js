import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyApcoD1JLYWuIrIB9Zhn3AEdikfe1T-vbg",
    authDomain: "dream-mapp-app.firebaseapp.com",
    projectId: "dream-mapp-app",
    storageBucket: "dream-mapp-app.appspot.com",
    messagingSenderId: "434266036849",
    appId: "1:434266036849:web:394ae1af61fb9a3b1d19d0",
    measurementId: "G-JRJ3H3DPYX"

  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };
