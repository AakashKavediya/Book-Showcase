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

firebase.initializeApp(firebaseConfig);

var signupDB = firebase.database().ref("CreateAccount");

document.getElementById("CreateAccount").addEventListener("submit", submitform);

function submitform(e) {
    e.preventDefault();

    var name = getElementVal("firstname");
    var password = getElementVal("email");
    var email = getElementVal("password");
    var dateofBirth = getElementVal("date");
    var phonenumber = getElementVal("number");
    var branch = getElementVal("city");

    saveMessage(name, email, password, dateofBirth, phonenumber, branch);

    console.log(firstname, password, email, dateofBirth, phonenumber, branch);
    alert(
        "Your all data is valid and information is getting stored in firebase database"
    );
}

const saveMessage = (firstname, password, email, date, number, city) => {
    var newSignup = signupDB.push();
    newSignup.set({
        Name: firstname,
        Password: password,
        Email: email,
        DateOfBirth: date,
        PhoneNumber: number,
        Branch: city
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

// ----------------------------------------------------------------

// {
//   "uid": "bcb575f4-399c-4b2c-ad77-68e7ab5bf482",
//   "token": {
//     "sub": "bcb575f4-399c-4b2c-ad77-68e7ab5bf482",
//     "authFields": {
//       "email": "",
//       "email_verified": false,
//       "phone_number": "",
//       "name": ""
//     },
//     "firebase": {
//       "sign_in_provider": "google.com"
//     }
//   }
// }