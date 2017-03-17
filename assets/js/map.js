
		var map;
		function getLocation() {
  		if (navigator.geolocation) {
      	navigator.geolocation.getCurrentPosition(showPosition);
  			} else {
      	map.innerHTML = "Geolocation is not supported by this browser.";
  		}
		};
		function showPosition(position) {
			console.log(position);
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			console.log("HELLO");
  		map.setCenter(pos);
		};
		function initMap() {
						var styles =
						[
						    {
						        "featureType": "administrative",
						        "elementType": "labels.text.fill",
						        "stylers": [
						            {
						                "color": "#444444"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#cacaca"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape.natural.terrain",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#90c383"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.attraction",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#a9a9a9"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.business",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#a9a9a9"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.government",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#a9a9a9"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.medical",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#c34131"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.park",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#b3ebb0"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.place_of_worship",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#a9a9a9"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.school",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#e1e262"
						            }
						        ]
						    },
						    {
						        "featureType": "poi.sports_complex",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#a9a9a9"
						            }
						        ]
						    },
						    {
						        "featureType": "road",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": 45
						            }
						        ]
						    },
						    {
						        "featureType": "road.highway",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "simplified"
						            }
						        ]
						    },
						    {
						        "featureType": "road.highway",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#f1f1f1"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "road.highway",
						        "elementType": "geometry.stroke",
						        "stylers": [
						            {
						                "color": "#8f8f8f"
						            },
						            {
						                "visibility": "on"
						            },
						            {
						                "weight": "1"
						            }
						        ]
						    },
						    {
						        "featureType": "road.arterial",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#f3f3f3"
						            }
						        ]
						    },
						    {
						        "featureType": "road.arterial",
						        "elementType": "geometry.stroke",
						        "stylers": [
						            {
						                "color": "#b7b7b7"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "road.local",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#efefef"
						            }
						        ]
						    },
						    {
						        "featureType": "road.local",
						        "elementType": "geometry.stroke",
						        "stylers": [
						            {
						                "color": "#a59686"
						            }
						        ]
						    },
						    {
						        "featureType": "transit",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "transit.station.airport",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#a9a9a9"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "transit.station.bus",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#a9a9a9"
						            }
						        ]
						    },
						    {
						        "featureType": "transit.station.rail",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#a9a9a9"
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "all",
						        "stylers": [
						            {
						                "color": "#7dabd0"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            }
						        ]
						    }
						];

			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 30.274301, lng: -97.739600},
				zoom: 25,
				styles: styles,
        		mapTypeControl: true,
        		zoomControl: true,
        		scaleControl: false,
        		streetViewControl: true,
        		rotateControl: true,
        		fullscreenControl: true
			});

			//var pos = {
			//	lat: position.coords.latitude,
			//	lng: position.coords.longitude
			//};


			var infowindow = new google.maps.InfoWindow({
				content: 'Hello Austin!'
				//map:map
			});

			//Map Layers
			var trafficLayer = new google.maps.TrafficLayer();
				trafficLayer.setMap(map);
			var transitLayer = new google.maps.TransitLayer();
  				transitLayer.setMap(map);
  			var bikeLayer = new google.maps.BicyclingLayer();
  				bikeLayer.setMap(map);



//Stuff I added 3/14
//Gourdough's Big Fat Donuts
					var firstFoodTruck = new google.maps.LatLng(30.249512, -97.754808);//
					var secondFoodTruck = new google.maps.LatLng(30.236757, -97.762788); //Gourdough's Big Fat Dounut's
					var thirdFoodTruck = new google.maps.LatLng(30.315275, -97.716641); //The Vegan Nom
					var fourthFoodTruck = new google.maps.LatLng(30.267194, -97.745590); //Surf n turf
					var fifthFoodTruck = new google.maps.LatLng(30.260685, -97.738358); //Tommy Want Wingy
					var sixthFoodTruck = new google.maps.LatLng(30.295504, -97.741759);//Cool Beans
					var seventhFoodTruck = new google.maps.LatLng(30.264476, -97.728304); //Kebabalicious

					var mapOptions = {
					  zoom: 12,
					  center: firstFoodTruck
					}
					var map = new google.maps.Map(document.getElementById("map"), mapOptions);




					var marker = new google.maps.Marker({
					    position: firstFoodTruck,
					    title:"Hello World!",
							label: "1"
});



		function addInfoWindowOne(marker, content) {
    var infoWindow = new google.maps.InfoWindow({
        content: "Torchy's Tacos"

    });
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
    });
};
				addInfoWindowOne(marker);


/////////////////////////////////////////////
					var secondMarker = new google.maps.Marker({
							position:  secondFoodTruck,
							 title:"secondFoodTruck",
							 label: "2"
					});

					// To add the marker to the map, call setMap();

					var thirdMarker = new google.maps.Marker({
							position:  thirdFoodTruck,
							 title:"thirdFoodTruck",
							 label: "3"
					});

					function addInfoWindowThree(thirdMarker, content) {
					var infoWindow = new google.maps.InfoWindow({
							content: "The Vegan Nom"

					});
					google.maps.event.addListener(thirdMarker, 'click', function() {
							infoWindow.open(map, thirdMarker);
					});
					};
							addInfoWindowThree(thirdMarker);

////////////////////////////

					var fourthMarker = new google.maps.Marker({
							position:  fourthFoodTruck,
							 title:"fourthFoodTruck",
							 label: "4"
					});
					function addInfoWindowFour(fourthMarker, content) {
					var infoWindow = new google.maps.InfoWindow({
							content: "Surf n Turf"

					});
					google.maps.event.addListener(fourthMarker, 'click', function() {
							infoWindow.open(map, fourthMarker);
					});
					};
					addInfoWindowFour(fourthMarker);

						var fifthMarker = new google.maps.Marker({
							position:  fifthFoodTruck,
							 title:"fifthFoodTruck",
							 label: "5"
						 });
						 function addInfoWindowFive(fifthMarker, content) {
						 var infoWindow = new google.maps.InfoWindow({
						 		content: "Tommy Want Wingy"

						 });
						 google.maps.event.addListener(fifthMarker, 'click', function() {
						 		infoWindow.open(map, fifthMarker);
						 });
						 };
						 addInfoWindowFive(fifthMarker);
////////////////////////////////////////////////////////////////////////
var sixthMarker = new google.maps.Marker({
		position:  sixthFoodTruck,
		 title:"sixthFoodTruck",
		 label: "6"
});

function addInfoWindowSix(sixthMarker, content) {
var infoWindow = new google.maps.InfoWindow({
		content: "Cool Beans"

});
google.maps.event.addListener(sixthMarker, 'click', function() {
		infoWindow.open(map, sixthMarker);
});
};
		addInfoWindowSix(sixthMarker);

////////////////////////////////////////////////////////////

var seventhMarker = new google.maps.Marker({
		position: seventhFoodTruck,
		 title:"seventhFoodTruck",
		 label: "7"
});

function addInfoWindowSeven(seventhMarker, content) {
var infoWindow = new google.maps.InfoWindow({
		content: "Kebabalicious<br>address<br>address"

});
google.maps.event.addListener(seventhMarker, 'click', function() {
		infoWindow.open(map, seventhMarker);
});
};
		addInfoWindowSeven(seventhMarker);



					marker.setMap(map);
					secondMarker.setMap(map);
					thirdMarker.setMap(map);
					fourthMarker.setMap(map);
					fifthMarker.setMap(map);
					sixthMarker.setMap(map);
					seventhMarker.setMap(map);



///////////////////////////////////////////

									function addInfoWindow(secondMarker, content) {

									var infoWindow = new google.maps.InfoWindow({
											content: "Gourdough's Big. Fat. Donuts"

									});

									google.maps.event.addListener(secondMarker, 'click', function () {
											infoWindow.open(map, secondMarker);
									});

										};

									addInfoWindow(secondMarker);



					//






	};//end initMap









	// $('firstFoodTruck').mouseover(function(event) {
	//     createTooltip(event);
	// }).mouseout(function(){
	//     // create a hidefunction on the callback if you want
	//     //hideTooltip();
	// });
	//
	// function createTooltip(event){
	//     $('<div class="tooltip">test</div>').appendTo('body');
	//     positionTooltip(event);
	// };
