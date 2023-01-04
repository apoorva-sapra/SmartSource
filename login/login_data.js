
const firebaseConfig = {
    apiKey: "AIzaSyBoni0BSgzE8iAo2mhKVOiRt4LWS7cPbaQ",
    authDomain: "sourcign-2a97a.firebaseapp.com",
    databaseURL: "https://sourcign-2a97a-default-rtdb.firebaseio.com",
    projectId: "sourcign-2a97a",
    storageBucket: "sourcign-2a97a.appspot.com",
    messagingSenderId: "829422727128",
    appId: "1:829422727128:web:537e95c6000459234b0cad",
    measurementId: "G-4NRHX5X53Q"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var database = firebase.database();


// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Firebase Authentication and get a reference to the service
// const auth = firebase.auth();

// function UserRegister() {
//     var email = document.getElementById('signup_email').value;
//     var password = document.getElementById('signup_password').value;

//     if (email && password) {
//         if (password.length < 8) {
//             document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
//             return false;
//         }
//         auth.createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             db.set(db.ref('users/' + user.uid),{
//                 name: name,
//                 email: email
//             });
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage);
            
//         });
//     }
   
// }

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//     });


// function UserRegister(){
// var email = document.getElementById('email').value;
// var password = document.getElementById('password').value;
// if (password.length<8){
//     document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
//     return false;
//     }
// if(!email && !password){

// }
// firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){

// }).catch(function (error){
//     var errorcode = error.code;
//     var errormsg = error.message;
// });
// }

// authentication
// const auth = firebase.auth();

// function SignIn() {
//     var email = document.getElementById('signin_email').value;
//     var password = document.getElementById('signin_password').value;

//     if(email && password){
//         const promise = auth.signInWithEmailAndPassword(email, password);
//         console.log("entered signin");
//         promise.catch(e => alert(e.msg));
//         window.open("../homepage_1.html", "_self");
//     }

// }

document.getElementById('signin_form').addEventListener('submit', (e) => {
    e.preventDefault();
    var email = document.getElementById('signin_email').value;
    var password = document.getElementById('signin_password').value;

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('User loged in!');
        window.location.href= "../homepage_1.html";

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
  });
})


document.getElementById('signup_form').addEventListener('submit', (e) => {

    e.preventDefault();

    var name = document.getElementById('signup_name').value;
    var email = document.getElementById('signup_email').value;
    var password = document.getElementById('signup_password').value;

    if (name && email && password){
    
        if (password.length < 8) {
            document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
            return false;
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const dt = new Date();
            const user = userCredential.user;
            firebase.database().ref('users/' + user.uid).set({
                name: name,
                email: email,
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            
        });
        
        alert("Successfully Signed Up!");
        console.log("data sent");
        document.getElementById('signup_form').reset();
        document.getElementById("errorMsg").innerHTML= "";
    }
    else{
        alert("Please fill all the fields with * marked.")
    }

});

function getId(id) {
    return document.getElementById(id).value;
}
