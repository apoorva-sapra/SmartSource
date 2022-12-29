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

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


var database  = firebase.database().ref('data');

function UserRegister(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
if (password.length<8){
    document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
    return false;
    }
if(!email && !password){
    
}
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}

//authentication
const auth = firebase.auth();

function SignIn(){
    var email = document.getElementById('signin_email').value;
    var password = document.getElementById('signin_password').value;

    const promise = auth.signInWithEmailAndPassword(email,password);

    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}

document.getElementById('signup_form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = database.push();
    
    userInfo.set({
        name: getId('name'),
        email : getId('email'),
        password : getId('password')
    });
    alert("Successfully Signed Up!");
    console.log("data sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}
