 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";

 import { getAuth, signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries


 
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 //Eye icon
 let eyeicon = document.getElementById("eyeicon");
   let password = document.getElementById("login_password");

   eyeicon.onclick = function(){
     if (password.type == "password") {
       password.type = "text";
     } else {
       password.type = "password";
     }
   }
   

   // Firebase Authentication
 const firebaseConfig = {
   apiKey: "AIzaSyBinM_1aYRB7P38tzdSpNIbvuagzHcxYwg",
   authDomain: "unit5-72828.firebaseapp.com",
   projectId: "unit5-72828",
   storageBucket: "unit5-72828.appspot.com",
   messagingSenderId: "316580438171",
   appId: "1:316580438171:web:d519fe2a395505f50de63e",
   measurementId: "G-GD2W6CCBJQ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 console.log(app);
 const auth = getAuth();

 // ================
 document.getElementById("login").addEventListener("click", function(event) {
 event.preventDefault();
 let email = document.getElementById("login_email").value;
 let password = document.getElementById("login_password").value;

 // Clear previous messages and styling
 document.getElementById("emailMessage").textContent = "";
 document.getElementById("passwordMessage").textContent = "";
 document.getElementById("loginSuccessMessage").textContent = "";
 document.getElementById("login_email").classList.remove("error-field");
 document.getElementById("login_password").classList.remove("error-field");

 signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
         const user = userCredential.user;
         console.log(user);
         document.getElementById("logout").style.display = "block";
         document.getElementById("loginSuccessMessage").textContent = "Login successful!";
         window.location.href="../Oestin_CW/index.html"
         document.getElementById("login").style.display = 'none';
     })
     .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorMessage);

         // Display error messages and apply error styles with animation to input fields
         if (errorCode === "auth/invalid-email" || errorCode === "auth/user-not-found") {
             document.getElementById("emailMessage").textContent = errorMessage;
             document.getElementById("login_email").classList.add("error-field");
             document.getElementById("login_email").classList.add("error-field");
         } else if (errorCode === "auth/wrong-password") {
             document.getElementById("passwordMessage").textContent = errorMessage;
             document.getElementById("login_password").classList.add("error-field");
             document.getElementById("login_password").classList.add("error-field");
         }
     });
});

document.getElementById("login_email").addEventListener("focus", function() {
 this.classList.remove("error-field");
});

document.getElementById("login_password").addEventListener("focus", function() {
 this.classList.remove("error-field");
});


 // ====================

 document.getElementById("logout").addEventListener("click", function(){
     
     signOut(auth)
     .then(() => {
     // Sign-out successful.
     alert("logout successfully")
     location.href= "./signup.html"

     }).catch((error) => {
     // An error happened.
     });
 
 })

 login.onclick = function(){
   if (alert === "logout successfully") {
     password.type = "text";
   } else {
     password.type = "password";
   }
 }




 
