// Initialize Firebase
  var config = {
    apiKey: "AIzaSyARhhQ5mtrPId5Xx9pFDwHksWDtWg1A2VI",
    authDomain: "burt-macklin.firebaseapp.com",
    databaseURL: "https://burt-macklin.firebaseio.com",
    storageBucket: "burt-macklin.appspot.com",
    messagingSenderId: "610683434746"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  database.ref().on("child_added", function(snapshot) {
  	if ((snapshot.child("name").exists()) && (snapshot.child("location").exists())) {
  		var ftName = snapshot.val().name;
  		var location = snapshot.val().location;
  		var foodType = snapshot.val().foodType;
  		var review = snapshot.val().review;

  		var newDiv = $("<div>");
  		var newName = $("<h1>");
  		var newLoc = $("<p>");
  		var newFood = $("<p>");
  		var newReview = $("<p>");

  		newName.text(ftName);
  		newLoc.text(location);
  		newFood.text(foodType);
  		newReview.text(review);

  		newDiv.append(newName, newLoc, newFood, newReview);
  		$(?).append(newDiv);
  	}
  }, function(err) {
  	console.log("The read failed: " + err.code;
  });

$(?).on("click", function(ev) {
	ev.preventDefault();
	var ftName = $("#").val().trim();
  var location = $("#").val().trim();
 	var foodType = $("#").val().trim();
  var review = $("#").val().trim();

  database.ref().push({
  	name: ftName;
  	location: location;
  	foodType: foodType;
  	review: review
  });
})