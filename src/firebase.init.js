// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  apiKey: "AIzaSyBNFx7u_2rc8yA5UVfd6pDvLDjOen8G6Xk",
  authDomain: "genius-car-services-84164.firebaseapp.com",
  projectId: "genius-car-services-84164",
  storageBucket: "genius-car-services-84164.appspot.com",
  messagingSenderId: "406357496989",
  appId: "1:406357496989:web:f676ffd774c763ac33b074"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;