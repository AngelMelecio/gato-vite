import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyB2_Pu2NOq1oTDeZ6dKhp6k2ePS3mJKQdo",
    authDomain: "gato-minimax.firebaseapp.com",
    projectId: "gato-minimax",
    storageBucket: "gato-minimax.appspot.com",
    messagingSenderId: "1071507517842",
    appId: "1:1071507517842:web:92cc35edbe33a14437d14b",
    measurementId: "G-CLT87VKX31"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export async function postResult(game) {
    // Reference to your collection and document
    const docRef = collection(db,'resultados');

    addDoc(docRef, game)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            throw new Error("Error writing document: ", error)
        });
}