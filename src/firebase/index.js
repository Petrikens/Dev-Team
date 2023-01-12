import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_EdaXKzEQ_Yg1YnAl8ikzQDooFirlTis",
  authDomain: "interview-5ac2c.firebaseapp.com",
  databaseURL: "https://interview-5ac2c.firebaseapp.com",
  projectId: "interview-5ac2c",
  storageBucket: "interview-5ac2c.appspot.com",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
