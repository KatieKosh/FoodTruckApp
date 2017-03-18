

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

  function log(snap) {console.log(snap.val());}
  function error(errObj) {console.log("Errors Handled: " + errObj);}
  database.ref().on("value", log);
  var resArray = [];
  var ftArray = [];
  var ftObj = {};
  database.ref().limitToLast(3).on("child_added", function(snapshot) {
  	if ((snapshot.child("name").exists()) && (snapshot.child("location").exists())) {
  		var ftName = snapshot.val().name;
  		var location = snapshot.val().location;
  		var foodType = snapshot.val().foodType;
  		var review = snapshot.val().review;
      var parking = snapshot.val().parking;

  		var newDiv = $("<div>");
  		var newName = $("<h1>");
  		var newLoc = $("<p>");
  		var newFood = $("<p>");
  		var newReview = $("<p>");
      var parkingHead = $("<p>Parking:</p>")
      var newPark = $("<ul>");
      

      for (var i = 0; i < parking.length; i++) {
        var newParkLi = $("<li>");
        var parkVal = parking[i];
        newParkLi.text(parkVal);
        newPark.append(newParkLi);
      }

  		newName.text(ftName);
  		newLoc.text("Location: " + location);
  		newFood.text("Food Type: " + foodType);
  		newReview.text("Review: " + review);

  		newDiv.append(newName, newLoc, newFood, newReview, parkingHead, newPark);
  		$("#ftAdded").prepend(newDiv);
    }
  });
  database.ref().on("child_added", function(snapshot) {
    if ((snapshot.child("name").exists()) && (snapshot.child("location").exists())) {
      var ftName = snapshot.val().name;
      var location = snapshot.val().location;
      var MapsKey = "AIzaSyD0CRQGmRk6jLGBMYoFJ32zsL4e07t_leA"
      var queryMapURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + ",+Austin,+TX&key=" + MapsKey;
      var j = 8;
      $.ajax({
        url:queryMapURL,
        method: "GET"
      }).done(function(response) {
        var lat = response.results[0].geometry.location.lat;
        var lng = response.results[0].geometry.location.lng;
        var loc = response.results[0].formatted_address;
        var foodTruck = new google.maps.LatLng(lat, lng);
        var newMarker = new google.maps.Marker({
          position: foodTruck,
          title: ftName,
          lable: j
        });
        function addInfoWindow(newMarker, content) {
          var InfoWindow = new google.maps.InfoWindow({
            content: ftName + "<br>" + loc
          });
          google.maps.event.addListener(newMarker, 'click', function() {
            InfoWindow.open(map, newMarker);
          });
        };
        addInfoWindow(newMarker);
        newMarker.setMap(map);
        j++;
      });
  	}
  }, function(err) {
  	console.log("The read failed: " + err.code);
  });

// $().on("click", 

// new Vue({
// 				  el: "#addTruck",
// 				  data: {
// 				    name: "",
// 				    loc: "",
// 				    review: "",
// 				    picked: ""
// 				  },
// 				  methods: {
// 				  	submit: function(ev) {
// 	ev.preventDefault();
// 	var ftName = $("#ftName").data().trim();
//   var location = $("#location").val().trim();
//  	var foodType = $("#").val().trim();
//   var review = $("#review").val().trim();

//   database.ref().push({
//   	name: ftName,
//   	location: location,
//   	foodType: foodType,
//   	review: review
//   });
// }
// 				  }
// 				})


var vm = new Vue({
	el: "#addTruck",
  components: {
    "vue-form-generator": VueFormGenerator.component
  },

  methods: {
    prettyJSON: function(json) {
      if (json) {
        json = JSON.stringify(json, undefined, 4);
        json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          var cls = "number";
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = "key";
            } else {
              cls = "string";
            }
          } else if (/true|false/.test(match)) {
            cls = "boolean";
          } else if (/null/.test(match)) {
            cls = "null";
          }
          return "<span class=\"" + cls + "\">" + match + "</span>";
        });
      }
    }
  },

  data: {
		model: {
			name: "",
			location: "",
      parking: ["None"],
			review: "",
			foodType: [],
		},
		schema: {
			fields: [{
				type: "input",
				inputType: "text",
				label: "Name",
				model: "name",
				featured: true,
				required: true,
				disabled: false,
        validator: VueFormGenerator.validators.string
			},{
				type: "input",
				inputType: "text",
				label: "Location",
				model: "location",
				required: true,
				hint: "123 Main St. Austin, TX 78704",
        validator: VueFormGenerator.validators.string
			}, {
				type: "textArea",
				label: "Review",
				model: "review",
				hint: "Max 500 characters",
				max: 500,
				rows: 3,
			},{
        type: "checklist",
        label: "Parking",
        model: "parking",
        required: true,
        listbox: true,
        values: ["None", "Free Onsite", "Paid Onsite", "Free Street", "Paid Street", "None"],
        validator: VueFormGenerator.validators.array
      },{
				type: "radios",
				label: "Food Type",
				model: "foodType",
				values: ["Tacos", "Burgers", "Cupcakes", "Other"]
			},{
				type: "submit",
				buttonText: "Submit Your Truck",
				onSubmit: function(e) {
					event.preventDefault();
					var ftName = vm.$data.model.name;
				  var location = vm.$data.model.location;
          var parking = vm.$data.model.parking;
				 	var foodType = vm.$data.model.foodType;
          var review = vm.$data.model.review;

          
          // var nameRef = database.ref("users").orderByChild("time").key;
          //   console.log(nameRef);

          //var usersRef = nameRef.child("Test Name");
          //var existName = usersRef.isEqual(nameRef);
          // 
          // var existName = nameRef.isEqual(rootRef.ref());
          // console.log(existName);
				  
				// if ((ftName.isEqual(database.ref().child("name"))) && (location.isEqual(database.ref().child("location")))) {
				//   	return alert("That exists");
				//   } else {

				  database.ref().push({
				  	name: ftName,
				  	location: location,
            parking: parking,
				  	foodType: foodType,
				  	review: review,
				  	dateAdded: firebase.database.ServerValue.TIMESTAMP
				  });
				
          vm.$data.model = {
          name: "",
          location: "",
          parking: [],
          review: "",
          foodType: [],
          }

          //window.location.reload();
			  }
		  }]
    },
    formOptions: {
      validateAfterLoad: true,
      validateAfterChanged: true
    }
  }
});


var vueName = vm.$data.model.name;
var vueLoc = vm.$data.model.location;
var vueReview = vm.$data.model.review;
var vueFood = vm.$data.model.foodType;

var lunchBoxApi = "4203b508a2eb71331db0dffecb790d02"


    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=Austin&units=imperial&appid=" + lunchBoxApi;
    // var austinId = {"_id":4671654,"name":"Austin","country":"US","coord":{"lon":-97.743057,"lat":30.267151}}

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        
        // variables for current weather and the weather in three hours
        var currentTemp = response.list[3].main.temp;
        var currentPrecip = response.list[3].weather[0].description;
        var threeHourTemp = response.list[4].main.temp;
        var threeHourPrecip = response.list[4].weather[0].description;

         // Transfer content to HTML
        $("#city").html(response.city.name + " Lunch Time Weather:");
        $("#current").html("At 10am, it'll be " + Math.floor(currentTemp) + " degrees with " + currentPrecip + ".");
        $("#threeHR").html("By 1pm, it'll be " + Math.floor(threeHourTemp) + " degress with " + threeHourPrecip + ".");


        // console logging the returned weather information from openweathermap
        console.log(response.city.name);
        console.log("current weather: " + response.list[0].main.temp);
        console.log("rain: " + response.list[0].weather[0].description);
        console.log("3hr forecast: " + response.list[1].main.temp);
        console.log("rain: " + response.list[1].weather[0].description);

      });

