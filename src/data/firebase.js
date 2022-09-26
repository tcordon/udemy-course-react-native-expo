import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: 'AIzaSyCUfVue48hnkLsAxGVqBpRUMJCVGrCWYrs',
  authDomain: 'tripadvisorderestaurantes.firebaseapp.com',
  projectId: 'tripadvisorderestaurantes',
  storageBucket: 'tripadvisorderestaurantes.appspot.com',
  messagingSenderId: '1008885814544',
  appId: '1:1008885814544:web:df0aa2287a05feb7f44195'
}

// Initialize Firebase
const initFirebase = initializeApp(firebaseConfig)

export default initFirebase
