const firebaseConfig = {
    apiKey: "AIzaSyAZSJyUKpvAzQvIpT_GIJz8F9-jJDjOsy4",
    authDomain: "rao-iit-academy.firebaseapp.com",
    databaseURL: "https://rao-iit-academy-default-rtdb.firebaseio.com",
    projectId: "rao-iit-academy",
    storageBucket: "rao-iit-academy.appspot.com",
    messagingSenderId: "98907071638",
    appId: "1:98907071638:web:601e76f5be6393c5130eb7",
    measurementId: "G-M682NELZ4K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the entered email and password
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Sign in with Firebase Authentication
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(function(userCredential) {
                // Login successful
                var user = userCredential.user;
                document.getElementById("loginMessage").textContent =
                    "Login successful!";
                // Redirect to another page or perform additional actions
            })
            .catch(function(error) {
                // Error occurred, show error message
                var errorMessage = error.message;
                document.getElementById("loginMessage").textContent = errorMessage;
            });
    });