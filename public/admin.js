// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
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
const dbRef = ref(db, "bookings");


var ordersData = [];

function renderArray() {
  var ordersList = document.getElementById("ordersList");
  ordersList.innerHTML = "";
  ordersData.forEach(function (e) {
    console.log(e);
    ordersList.innerHTML += `
    <div class="p-3 themeLight rounded shadow">
            <div class="d-flex justify-content-between">
              <h3 class="fw-bold text-warning">Syed Rent A Car</h3>
              <h5>${e.Name} <i class="fad fa-user"></i> </h5>
            </div>
            <h5><i class="fas fa-address-book"></i> ${e.PhoneNo}</h5>
            <h5><i class="fas fa-envelope"></i> ${e.Email}</h5>
            <div class="py-2">
              <div class="row">
                <div class="col-md-3">
                  <h5><i class="fad fa-calendar-check"></i> ${e.ReturnDate}</h5>
                </div>
                <div class="col-md-3">
                  <h5><i class="fad fa-calendar-check"></i> ${e.DateOut}</h5>
                </div>
                <div class="col-md-3 ">
                    <h5 ><i class="fas fa-car"></i> ${e.VechileType}</h5>
                  </div>
                  <div>
                  <h3 class="text-center text-danger">Thankyou For Your Booking</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   `;
  });
}
function deleteOrder(id) {
  console.log(id);
}
onValue(
  dbRef,
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      ordersData.push(childSnapshot.val());
      renderArray();
      // ...
    });
  },
  {
    onlyOnce: false,
  }
);