import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVOzkzrPM5mm_cHHpz_Dceo_Vf5mR0IIw",
    authDomain: "brightdata-scraper-build-748f9.firebaseapp.com",
    projectId: "brightdata-scraper-build-748f9",
    storageBucket: "brightdata-scraper-build-748f9.appspot.com",
    messagingSenderId: "101984449593",
    appId: "1:101984449593:web:27bae5f00b76e7f0db09e8"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export{ db };