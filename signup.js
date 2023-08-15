
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    // Eye icon
    let eyeicon = document.getElementById("eyeicon");
      let password = document.getElementById("password");

      eyeicon.onclick = function(){
        if (password.type == "password") {
          password.type = "text";
        } else {
          password.type = "password";
        }
      }

      
      // Eye icon for confirm password
      let confirmEyeIcon = document.getElementById("confirmEyeIcon");
      let confirmPassword = document.getElementById("confirmPassword");

      confirmEyeIcon.onclick = function () {
        if (confirmPassword.type === "password") {
          confirmPassword.type = "text";
        } else {
          confirmPassword.type = "password";
        }
      };
    
      
      // Password check
      function isStrongPassword(password) {
      // Define your password strength rules here
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/.test(password);

      return (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumbers &&
        hasSpecialChars
      );
      }

           // Firebase Authenticaiton
    const firebaseConfig = {
      apiKey: "AIzaSyBinM_1aYRB7P38tzdSpNIbvuagzHcxYwg",
      authDomain: "unit5-72828.firebaseapp.com",
      projectId: "unit5-72828",
      storageBucket: "unit5-72828.appspot.com",
      messagingSenderId: "316580438171",
      appId: "1:316580438171:web:d519fe2a395505f50de63e",
      measurementId: "G-GD2W6CCBJQ"
    };

    const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth();

        // ...
        document.getElementById("register").addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    // Clear previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(message => message.textContent = "");

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
        return;
    }

    // Check if password is strong
    if (!isStrongPassword(password)) {
        document.getElementById("password-error").textContent = "Password is not strong enough.";
        return;
    }

    // Create user
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Show success message
            // Inside the createUserWithEmailAndPassword .then block
                const successMessage = document.createElement("p");
                successMessage.textContent = "Signup successful! Redirecting to signin page...";
                successMessage.classList.add("success-message");
                document.getElementById("registration_form").appendChild(successMessage);

            
            // Redirect after a brief delay
            setTimeout(() => {
                window.location.href = "./signin.html"; // Replace with your actual signin page URL
            }, 2000); // Redirect after 3 seconds (adjust as needed)
        })
        .catch((error) => {
            document.getElementById("email-error").textContent = error.message;
            console.log(error.message);
        });
});


    document.getElementById("logout").addEventListener("click", function() {

        signOut(auth)
        .then(() => {

            alert("logout successfully");
            location.href = "./signup.html";
        })
        .catch ((error) => {
            
        });

    });


 