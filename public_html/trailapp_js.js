/*
   window.onload = function getLocation() {
   if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(showPos);
   }
   }
   var lat_me, lng_me;
   function showPos(pos) {
   lat_me = pos.coords.latitude;
   lng_me = pos.coords.longitude;
   };

//                   x = 36.99933;
//                  y = -122.0533717;
*/ 
function initialize() {
    var contentString = [
        //////////////////////////////////////////////////////////////////////////
		// 1st osprey
        '<div>'+
        '<h1>Osprey</h1>'+
		'<img style="width:50%" src="osprey-nest.jpg" alt="Osprey">'+
        // '<div style="height:200px;padding-bottom:10px;">'+
        // '<script type="text/javascript" src="image.js"></script></div>'+
        // '<div>'+
        // '<button type="button" onClick="backward();return false">Previous</button>'+
        // '<button type="button" onClick="forward();return false">Next</button>'+
        // '</div>'+
        '<p>The osprey (<i>Pandion haliaetus</i>), sometimes known as the fish eagle, sea hawk, river hawk, or fish '+
        'hawk, is a diurnal, fish-eating bird of prey. It is a large raptor, reaching more than 60 cm (24 in) in length '+
        'and 180 cm (71 in) across the wings. It is brown on the upperparts and predominantly greyish on the head and '+
        'underparts.</p>'+
        '<p>The osprey tolerates a wide variety of habitats, nesting in any location near a body of water providing an '+
        'adequate food supply. It is found on all continents except Antarctica, although in South America it occurs only '+
        'as a non-breeding migrant.</p>'+
        '<p><a href="https://en.wikipedia.org/wiki/Osprey">Wikipedia</a></p>'+
        '</div>',
        //////////////////////////////////////////////////////////////////////////
		// 2nd channel drainage system
		'<div>'+
		'<h1>Channel Drainage System</h1>'+
		'<img style="padding-right:10px; width:362px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/CollectorDrain.jpg/800px-CollectorDrain.jpg" alt="Agricultural Drainage"></img>'+
		'<p>The role of logging and cultivated agriculture, including controlled grazing and plowing, had a dramatic '+
		'influence on the natural habitats in the Pajaro Valley. With in the slough system, the marshes were drained for '+
		'the planting of crops through the establishment of a channel drainage system.</p>'+
		'<p>(Watsonville Wetlands Watch, Wikipedia)</p>'+
		'</div>',
        //////////////////////////////////////////////////////////////////////////
		//3rd American white pelican
        '<div>'+
		'<h1>American White Pelican</h1>'+
		'<img src="http://www.watsonvillewetlandswatch.org/images/birdspage/tooltipImages/AmericanWhitePelican.jpg" alt="American White Pelican"></img>'+
		'<p>The American white pelican (<i>Pelecanus erythrorhynchos</i>) is a large aquatic soaring bird from the order Pelecaniformes. '+
		'It breeds in interior North America, moving south and to the coasts, as far as Central America and South America, '+
		'in winter.</p>'+
		'<p>The American white pelican rivals the trumpeter swan, with a similar overall length, as the longest bird native '+
		'to North America. Both very large and plump, it has an overall length is about 50&#45;70 in (130&#45;180 cm), courtesy of the '+
		'huge beak which measures 11.3&#45;15.2 in (290&#45;390 mm) in males and 10.3&#45;14.2 in (260&#45;360 mm) in females. It has a '+
		'wingspan of about 95&#45;120 in (240&#45;300 cm).[3] The species also has the second largest average wingspan of any '+
		'North American bird, after the California condor.</p>'+
		'<p>(Watsonville Wetlands Watch, <a href="http://en.wikipedia.org/wiki/American_white_pelican">Wikipedia</a>)</p>'+
		'</div>',
        //////////////////////////////////////////////////////////////////////////
        // 4  tarplant
		'<div>'+
		'<h1>Santa Cruz Tarplant</h1>'+
		'<img style="float:left; padding-right:10px; width:230px; height:233px;" src="http://www.watsonvillewetlandswatch.org/plant_guide/images/SantaCruzTarplant.jpg" alt="Santa Cruz Tarplant"></img>'+
		'<p><b>Characteristics:</b> The tarplant is an aromatic, glandular annual herb in the sunflower family (Asteraceae), '+
		'growing 10&#45;50 cm (4&#45;20 inches) tall. Small plants may produce a single yellow daisy-like flower head on a single stem, while larger plants have a rigid main stem and lateral branches that grow to the height of the main stem and produce many flowers. It is coated with a sticky, resinous material that helps to retard water loss during the heat of the day and may also help to repel potential predators.'+
		'<a href="http://www.watsonvillewetlandswatch.org/plants.htm#ElkhornSlough">*</a></p>'+
		'<p><b>Where to find it:</b> It typically grows on deep loam and sandy loam soils with a subsurface clay component, which hold moisture longer into the growing season compared to the surrounding sandy soils. It is frequently associated with non-native grasses such as wild oat, barley, rattlesnake grass, vulpia, and bromes. Native associates include rushes, California oatgrass, and other tarplants. '+
		'The species is often found where disturbances maintain a short vegetation canopy through the growing season.'+
		'<a href="http://www.watsonvillewetlandswatch.org/plants.htm#ElkhornSlough">*</a></p>'+
		'<p><b>Interesting Fact:</b> Its beautiful flower heads color the otherwise dry fields of mid summer, attracting an interesting array of pollinators.'+
		'<a href="http://www.watsonvillewetlandswatch.org/plants.htm#ElkhornSlough">*</a></p>'+
		'<p>(Watsonville Wetlands Watch)</p>'+
		'</div>',
        //////////////////////////////////////////////////////////////////////////
        // 5 wetland restoration
        '<div>'+
		'<h1>Restoration</h1>'+
		'<img src="http://www.watsonvillewetlandswatch.org/images/restoration/SaintFrancisStudents.jpg" alt="Restoration"></img>'+
		'<p><i>Above: Students from Saint Francis High School install native plants along Middle Watsonville Slough, December 2011</i></p>'+
		'<p>Wetlands are a valuable natural resource that have been widely degraded. The islands you see behind the Nature Center are restored for a variety of birds and other wildlife. '+
		'Removal and exotic invasive weeds is the first step in returning these areas to natural health. '+
		'Weeds are replaced with native California plants that promote biodiversity and provide habitat for native wildlife.</p>'+
		'<p>(Watsonville Wetlands Watch)</p>'+
		'</div>',        

        //////////////////////////////////////////////////////////////////////////
		// 6 cattails
        '<div>'+
		'<h1>Cattails</h1>'+
		'<img style="float:left; padding-right:10px; width:230px; height:322px;" src="http://www.watsonvillewetlandswatch.org/plant_guide/images/Cattail.jpg" alt="Cattails" />'+
		'<p><strong>Characteristics:</strong> This plant is one of the most common plants growing in freshwater wetlands. It has long, flat light-green leaves and creeping roots. The flowers are at the end of a long stalk that looks like a hot dog on a stick. The fuzzy down that hangs on the cattails carries the seeds in the wind. </p>'+
		'<p><strong>Where to find it:</strong> Cattails grow in fresh water in every finger of the Watsonville Slough system. </p>'+
		'<p><strong>Life cycle:</strong> It flowers from June to July </p>'+
		'<p class="description"><strong>Cultural uses:</strong> The leaves were used for weaving mats for houses. Native Americans made toy cattail dolls. <span>Please see our <a href="http://www.watsonvillewetlandswatch.org/plants.htm#Disclaimer">statement</a> on the use of plants.</span></p>'+
		'<p><strong>Interesting fact:</strong> Look closely when you walk by a colony of cattails. Cattails provide habitat and food for many nesting birds, muskrats and other animals.</p>'+
		'<p>(Watsonville Wetlands Watch)</p>'+
		'</div>',

        //////////////////////////////////////////////////////////////////////////
        // 7 historic ohlone indian site
        '<div>'+
		'<h1>Historic Ohlone Indian Site</h1>'+
		'<p>'+
		'<img style="float:left;padding:0px 10px 0px 0px;" width="170" height="258" src="https://upload.wikimedia.org/wikipedia/en/a/ac/Ohlone_hut%28replica%29.jpg" alt="Ohlone"></img></div>'+
		'Human beings have left their mark on the Watsonville '+
		'Wetlands for thousands of years, however, the pace of the '+
		'transformations resulting from human contact has greatly '+
		'accelerated in the past 200 years. The first peoples, the '+
		'Calendaruc and other Ohlone tribes were hunters and '+
		'gatherers. They left their mark on the land by setting '+
		'fire to the land after harvesting seeds in autumn thereby '+
		'discourageing the growth of large woody plants promoted '+
		'regrowth of the perennial grasses and other plants they '+
		'used. (Watsonville Wetlands Watch, Wikipedia)</p>'+
		'</div>'
		];

    var latlngCenter = new google.maps.LatLng(36.906, -121.78);

    var latlng = 
        [new google.maps.LatLng(36.911, -121.803),
        new google.maps.LatLng(36.915917, -121.779631),
        new google.maps.LatLng(36.913525, -121.780813),
        new google.maps.LatLng(36.911101, -121.776457),
        new google.maps.LatLng(36.913507, -121.768687),
        new google.maps.LatLng(36.912601, -121.770290),
        new google.maps.LatLng(36.9016682,-121.7845458),
        ];
    var mapOptions = {
        //center: { lat: 36.906, lng: -121.78},
center: latlngCenter,
        zoom: 15,
        //mapTypeId: google.maps.MapTypeID.SATELLITE
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.setMapTypeId(google.maps.MapTypeId.HYBRID);
    //*
	
	//place "you are here" point on map
	var youAreHerePos;
	if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            youAreHerePos = new google.maps.LatLng(position.coords.latitude,
	                                           position.coords.longitude);
	
	        new google.maps.Marker({
                position: youAreHerePos,
                map: map,
                title: "You are here"
	        })
		
	    });
	}
	
	
    var markers = [
        new google.maps.Marker({
position: latlng[0],
map: map,
title:"Nest of Osprey",
icon: "./icons/animal.png"
}), 
        new google.maps.Marker({
position: latlng[1],
map: map,
title:"In the 1800s",
icon: "./icons/historical_sites.png"
}),
        new google.maps.Marker({
position: latlng[2],
map: map,
title:"American White Pelican",
icon: "./icons/animal.png"
}),
        new google.maps.Marker({
position: latlng[3],
map: map,
title:"Tarplant",
icon: "./icons/plant.png"
}),
        new google.maps.Marker({
position: latlng[4],
map: map,
title:"Wetland restoration",
icon: "./icons/people.png"
}),
        new google.maps.Marker({
position: latlng[5],
map: map,
title:"cattails",
icon: "./icons/plant.png"
}),
        new google.maps.Marker({
position: latlng[6],
map: map,
title:"ohlone indian",
icon: "./icons/historical_sites.png"
})];
//*/
//console.log(lat_me);
//console.log(lng_me);
console.log("hello");
/*
   var latlng_me = new google.maps.LatLng(lat_me, lng_me);

   var marker_me = new google.maps.Marker({
position: latlng_me,
map: map,
title:"me"
});
//*/
var infowindow = [
new google.maps.InfoWindow({
content: contentString[0], maxWidth: 500 
}), 
    new google.maps.InfoWindow({
content: contentString[1], maxWidth: 500
}), new google.maps.InfoWindow({
content: contentString[2], maxWidth: 500
}), new google.maps.InfoWindow({
content: contentString[3], maxWidth: 500
}), new google.maps.InfoWindow({
content: contentString[4], maxWidth: 500
}), new google.maps.InfoWindow({
content: contentString[5], maxWidth: 500
}), new google.maps.InfoWindow({
content: contentString[6], maxWidth: 500
})];

function CloseOtherWindow(opened) {
    for (i = 0; i < 7; i++) {
        if (i != opened) {
            infowindow[i].close();
        }
    }
}

//* // setup the markers and infoboxes
google.maps.event.addListener(markers[0], 'click', function() {
    infowindow[0].open(map,markers[0]);
        CloseOtherWindow(0);
    });
markers[0].setMap(map);
google.maps.event.addListener(markers[2], 'click', function() {
    infowindow[2].open(map,markers[2]);
        CloseOtherWindow(2);
    });
markers[2].setMap(map);
google.maps.event.addListener(markers[1], 'click', function() {
    infowindow[1].open(map,markers[1]);
        CloseOtherWindow(1);
});
markers[1].setMap(map);
google.maps.event.addListener(markers[3], 'click', function() {
    infowindow[3].open(map,markers[3]);
        CloseOtherWindow(3);
    });
markers[3].setMap(map);
google.maps.event.addListener(markers[4], 'click', function() {
    infowindow[4].open(map,markers[4]);
        CloseOtherWindow(4);
    });
markers[4].setMap(map);
google.maps.event.addListener(markers[5], 'click', function() {
    infowindow[5].open(map,markers[5]);
    CloseOtherWindow(5);
    });
markers[5].setMap(map);
google.maps.event.addListener(markers[6], 'click', function() {
    infowindow[6].open(map,markers[6]);
    CloseOtherWindow(6);
    });
markers[6].setMap(map);
//*/
var ctaLayer = new google.maps.KmlLayer({
url: 'http://people.ucsc.edu/~anguyenv/EntireMapWeb.kml'
});
ctaLayer.setMap(map);

/*
   var arry = [];
   for (i = 0; i < 7;i++) {
   arry.push(function() {infowindow[i].open(map,markers[i]);});
   }
   for (i = 0; i < 1; i++) {
   console.log(i);
   var fn = arry[i];
   google.maps.event.addListener(markers[i], 'click', fn);
   markers[i].setMap(map);
   }
//*/

//marker[0].setMap(map);
//                    marker_me.setMap(map);

var contextMenuOptions={};
contextMenuOptions.classNames={menu:'context_menu', menuSeparator:'context_menu_separator'};

var menuItems=[];
menuItems.push({className:'context_menu_item', eventName:'add_animal', label:'add animal'});
menuItems.push({className:'context_menu_item', eventName:'add_plant', label:'add plant'});
menuItems.push({className:'context_menu_item', eventName:'add_site', label:'add site'});
menuItems.push({className:'context_menu_item', eventName:'add_activity', label:'add activity'});
menuItems.push({className:'context_menu_item', eventName:'add_sabotage', label:'add sabotage'});

menuItems.push({});
menuItems.push({className:'context_menu_item', eventName:'center_map_click', label:'Center map here'});
contextMenuOptions.menuItems=menuItems;

var contextMenu=new ContextMenu(map, contextMenuOptions);

google.maps.event.addListener(map, 'rightclick', function(mouseEvent){
        contextMenu.show(mouseEvent.latLng);
        });

google.maps.event.addListener(contextMenu, 'menu_item_selected', function(latLng, eventName){
        switch(eventName){
        case 'add_animal':
        var marker = new google.maps.Marker({
position: latLng,
map: map,
icon: "./icons/animal.png"
});
        marker.setMap(map)
        break;
        case 'add_plant':
        var marker = new google.maps.Marker({
position: latLng,
map: map,
icon: "./icons/plant.png"
});
        marker.setMap(map)
        break;
        case 'add_site':
        var marker = new google.maps.Marker({
position: latLng,
map: map,
icon: "./icons/historical_sites.png"
});
 marker.setMap(map)
    break;
    case 'add_activity':
    var marker = new google.maps.Marker({
position: latLng,
map: map,
icon: "./icons/people.png"
});
 marker.setMap(map)
    break;
    case 'add_sabotage':
    var marker = new google.maps.Marker({
position: latLng,
map: map,
icon: "./icons/sabotage.png"
});

 marker.setMap(map)
    break;
    case 'center_map_click':
    map.panTo(latLng);
    break;
    }
});
}
google.maps.event.addDomListener(window, 'load', initialize);

