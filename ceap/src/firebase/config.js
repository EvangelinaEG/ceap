import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf3GDFrYfTpU7HIFTILDeHYXbYxwpqFSY",
  authDomain: "ceap-b96a8.firebaseapp.com",
  projectId: "ceap-b96a8",
  storageBucket: "ceap-b96a8.appspot.com",
  messagingSenderId: "715023021501",
  appId: "1:715023021501:web:425771f6d5f54bfe950ed4"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}