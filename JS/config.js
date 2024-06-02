const firebaseConfig = {
  apiKey: "AIzaSyAjAdaKob_1EexzezaWxqvYqLYj2Fz97Bs",
  authDomain: "project-jsi-83332.firebaseapp.com",
  projectId: "project-jsi-83332",
  storageBucket: "project-jsi-83332.appspot.com",
  messagingSenderId: "348938288604",
  appId: "1:348938288604:web:ead666df557a24dacee319",
  measurementId: "G-42PZN85J7V",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
