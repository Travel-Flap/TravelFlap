// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvMuTdrfnWLm04RoqJsHHCTsMkEiLe9X4",
  authDomain: "travelflap-a528d.firebaseapp.com",
  projectId: "travelflap-a528d",
  storageBucket: "travelflap-a528d.appspot.com",
  messagingSenderId: "1005012188953",
  appId: "1:1005012188953:web:96651479f0d6f3f7af8f88",
  measurementId: "G-Y87GJP14MB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider();
// export {auth,provider};