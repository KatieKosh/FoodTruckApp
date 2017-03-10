
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
						//Bernotti by KLO
						var styles = 
						[
						    {
						        "featureType": "administrative",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": "-100"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.country",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "hue": "#ff0000"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.country",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.province",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": 65
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "poi",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": "50"
						            },
						            {
						                "visibility": "simplified"
						            }
						        ]
						    },
						    {
						        "featureType": "road",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": "-100"
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
						        "featureType": "road.arterial",
						        "elementType": "all",
						        "stylers": [
						            {
						                "lightness": "30"
						            }
						        ]
						    },
						    {
						        "featureType": "road.local",
						        "elementType": "all",
						        "stylers": [
						            {
						                "lightness": "40"
						            }
						        ]
						    },
						    {
						        "featureType": "transit",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "visibility": "simplified"
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "hue": "#ffff00"
						            },
						            {
						                "lightness": -25
						            },
						            {
						                "saturation": -97
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "lightness": -25
						            },
						            {
						                "saturation": -100
						            }
						        ]
						    }
						];

			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 30.274301, lng: -97.739600},
				zoom: 14,
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

  		

			

	
	};//end initMap
