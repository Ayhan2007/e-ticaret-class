//// burada google firebase ile etkileşime buradan girilecek.
//firebase ile etkileşime geçildi
import { initializeApp } from "firebase/app";
//authentication işlemleri için(kullanıcı kaydı)
import { getAuth } from "firebase/auth";
//firestore database erişimi için
import {getFirestore} from "firebase/firestore";
// storage erişimi için (resim kayıt yeri)
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACrGbya9BlhfnTAaEsAXWA0Mpb_Uo3Yqg",
  authDomain: "e-ticaret-class-b3935.firebaseapp.com",
  projectId: "e-ticaret-class-b3935",
  storageBucket: "e-ticaret-class-b3935.appspot.com",
  messagingSenderId: "963231621637",
  appId: "1:963231621637:web:3031255d62f6613bc0326c",
  measurementId: "G-JF7WQ41C44"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 