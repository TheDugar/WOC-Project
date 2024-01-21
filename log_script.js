import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDHi6opz-2v--kvkM9JqB-9oLniY8GKP5o",
    authDomain: "shipnoodle-4a025.firebaseapp.com",
    projectId: "shipnoodle-4a025",
    storageBucket: "shipnoodle-4a025.appspot.com",
    messagingSenderId: "825890541201",
    appId: "1:825890541201:web:9979619f08b1b459e1f930",
    measurementId: "G-HMG3BX4VQ2"
}

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const dbref = ref(db);

let EmailInp = document.getElementById('emailInp');
let PassInp = document.getElementById('passwordInp');
let MainForm = document.getElementById('MainForm');
let SignInBtn = document.getElementById('signinBtn');
let SignUpBtn = document.getElementById('signupBtn');

let SignInUser = evt => {
    evt.preventDefault();
    

    signInWithEmailAndPassword(auth, EmailInp.value, PassInp.value)
        .then((credentials) => {
            get(child(dbref, 'UserAuthList/' + credentials.user.uid)).then((snapshot) => {
                if (snapshot.exists) {
                    sessionStorage.setItem("user-info", JSON.stringify({
                        username: snapshot.val().username
                    }))
                    sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                    window.location.href = 'Home2.html';
                }
            })
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })
}

let SignUp = evt => {
    window.location.href = 'register.html';
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    SignUpBtn.classList.remove("disable");
    SignInBtn.classList.add("disable");
}


SignUpBtn.addEventListener('click', SignUp);
MainForm.addEventListener('submit', SignInUser);