// Firebase config placeholder
// Replace with your actual Firebase project config
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef12345"
};

const app = initializeApp(firebaseConfig);

export default app;
