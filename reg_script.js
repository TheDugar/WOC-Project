import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDHi6opz-2v--kvkM9JqB-9oLniY8GKP5o",
    authDomain: "shipnoodle-4a025.firebaseapp.com",
    databaseURL: "https://shipnoodle-4a025-default-rtdb.firebaseio.com",
    projectId: "shipnoodle-4a025",
    storageBucket: "shipnoodle-4a025.appspot.com",
    messagingSenderId: "825890541201",
    appId: "1:825890541201:web:9979619f08b1b459e1f930",
    measurementId: "G-HMG3BX4VQ2"
  };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth();

let EmailInp = document.getElementById('emailInp');
let PassInp = document.getElementById('passwordInp');
let MainForm = document.getElementById('MainForm');
let NameField = document.getElementById('nameField');
let SignInBtn = document.getElementById('signinBtn');
let SignUpBtn = document.getElementById('signupBtn');
let DoBInp = document.getElementById('dobInp');





const RegisterUser = async (evt) => {
  evt.preventDefault();

  try {
      const credentials = await createUserWithEmailAndPassword(auth, EmailInp.value, PassInp.value);

      // Save user data to the Realtime Database
      await set(ref(db, 'UserAuthList/' + credentials.user.uid), {
          username: NameField.value,
          birthdate: DoBInp.value
      });

      // Redirect after successful authentication and data storage
      alert('Signed In');
      window.location.href = 'Home2.html';
  } catch (error) {
      // Handle authentication or data storage errors
      alert(error.message);
      console.error(error.code);
      console.error(error.message);
  }
};


let Visithome = evt =>{
    window.location.href = 'Home2.html';
}

let SignIn = evt => {
    window.location.href = 'login.html';
    NameField.style.maxHeight= "0";
    title.innerHTML = "Sign In";
    SignUpBtn.classList.add("disable");
    SignInBtn.classList.remove("disable");
}


MainForm.addEventListener('submit', RegisterUser);
// SignUpBtn.addEventListener('click',Visithome);
SignInBtn.addEventListener('click', SignIn);

