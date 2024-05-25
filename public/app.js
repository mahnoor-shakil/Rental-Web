// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8OI00K9-xoo8RjGxEAdd31F932CFv0_k",
  authDomain: "rent-a-car-8b2f7.firebaseapp.com",
  projectId: "rent-a-car-8b2f7",
  storageBucket: "rent-a-car-8b2f7.appspot.com",
  messagingSenderId: "510791185308",
  appId: "1:510791185308:web:751fda791617884c59ce59",
  measurementId: "G-1F4DBSBE07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();





booking.addEventListener('click',function(){
   
        var fullName = document.getElementById("fullName").value; 
        var phone = document.getElementById("phone").value; 
        var dateOut = document.getElementById("dateOut").value; 
        var returnDate = document.getElementById("returnDate").value; 
        var email = document.getElementById("email").value; 
        var select = document.getElementById("select").value; 
        var booking = document.getElementById("booking");


  if (fullName == "" || fullName == " " || fullName.length < 3) {
    alert("Enter Name");
    return;
  }
  if (phone == "" || phone == " " || phone.length < 3) {
    alert("Enter Phone No.");
    return;
  }
  if (dateOut == "" || dateOut == " " || dateOut.length < 3) {
    alert("Enter Date Out");
    return;}
    if (returnDate == "" || returnDate == " " || returnDate.length < 3) {
        alert("Enter Return Date");
    return;
    }
  if (email == "" || email == " ") {
    alert("Enter email");
    return;
  }
  if (select == "") {
    alert("Select Vechile Type");
    return;
  }
  var obj ={
      Name : fullName,
      PhoneNo : phone,
      DateOut: dateOut,
      ReturnDate :returnDate,
      Email: email,
      VechileType: select 
  }


  
  const bookingRef = ref(db, "bookings");
  const newPostRef = push(bookingRef);
  obj.id = newPostRef.key;
  set(newPostRef, obj)
    .then(function () {
      window.location.assign("admin.html") 

      console.log("success");
    })
    .catch(function (err) {
      console.log(err);
    });        

    }    

)
