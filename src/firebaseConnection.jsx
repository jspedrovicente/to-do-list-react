import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

    
    const firebaseConfig = {
        apiKey: "AIzaSyCpZalFLtdbmokSGlyQs0TfcDWzbqlSvCs",
        authDomain: "to-do-list-1d245.firebaseapp.com",
        projectId: "to-do-list-1d245",
        storageBucket: "to-do-list-1d245.appspot.com",
        messagingSenderId: "433170329394",
        appId: "1:433170329394:web:962daf8ba258e37e69712b",
        measurementId: "G-10FZTP5ZVJ"
    };
    const firebaseApp = initializeApp(firebaseConfig)
    const database = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp)
    
export { database, auth };

