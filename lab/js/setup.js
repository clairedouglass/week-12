
/** Notice the use of L.Map here. This is an extension of an organizational strategy we've already discussed. */
var app = {
  apikey: "ae6ff2437d01985d0d2fb226583a0b54e66a07a6",
  map: L.map('map', { center: [40.76621, -73.977817], zoom: 11 }),
  geojsonClient: new cartodb.SQL({ user: 'clairedouglass', format: 'geojson' }),
  drawnItems: new L.FeatureGroup()
};

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(app.map);


$('#manhattan').click(function() {
    app.map.setView([40.76621, -73.977817], 12);
  });
$('#brooklyn').click(function() {
    app.map.setView([40.653713, -73.955972], 12);
  });
$('#queens').click(function() {
    app.map.setView([40.742291, -73.875609], 12);
  });
$('#bronx').click(function() {
    app.map.setView([40.842556, -73.888533], 12);
  });



// The initial query by which we map the geojson representation of a table
// app.geojsonClient.execute("SELECT * FROM substopstracts") // 'LIMIT' should be added to the end of this line
//   .done(function(data) {
//     L.geoJson(data, {
//       onEachFeature: function(feature, layer) {
//         layer.on('click', function() { fillForm(feature.properties); });
//       }
//     }).addTo(app.map);
//   })
//   .error(function(errors) {
//   });


//Create layer
var nycLines = cartodb.createLayer(app.map, {
  user_name: 'clairedouglass',
  type: 'cartodb',
  interactivity: true,
  sublayers: [
    {
      sql: "SELECT * FROM subwaylines",
      cartocss: '#subwaylines {line-width: 2; line-color: #0B645E; polygon-fill: #fff; polygon-opacity: 0; line-opacity: 1;}',
    },
    {
      sql: "SELECT * FROM substopstracts",
      cartocss: '#layer {marker-width: 8; marker-fill: black; marker-fill-opacity: 0.9; marker-line-color: #FFF; marker-line-width: 1; marker-line-opacity: 1; marker-placement: point; marker-type: ellipse; marker-allow-overlap: true; }',
    }
  ]
  })
  .addTo(app.map)
  .on('done', function(layer) {
  // Set interactivity
  // layer.setInteraction(true);
  // Set up map interaction event
  // layer.on('featureClick',function(e, latlng, pos, data) {
  //   console.log(data);
  // });
  // Add button click events, demo setCartoCSS and setSQL
  $('#line1').click(function() {
    layer.getSubLayer(0).setSQL(sqlLine1).setCartoCSS('#subwaylines {line-width: 3; line-color: #ef3e34}');
    layer.getSubLayer(1).setSQL(sqlStops1);
  });
  $('#line2').click(function() {
    layer.getSubLayer(0).setSQL(sqlLine2).setCartoCSS('#subwaylines {line-width: 3; line-color: #ef3e34}');
    layer.getSubLayer(1).setSQL(sqlStops2);
  });
  $('#line3').click(function() {
    layer.getSubLayer(0).setSQL(sqlLine3).setCartoCSS('#subwaylines {line-width: 3; line-color: #ef3e34}');
    layer.getSubLayer(1).setSQL(sqlStops3);
  });
  $('#line4').click(function() {
    layer.getSubLayer(0).setSQL(sqlLine4).setCartoCSS('#subwaylines {line-width: 3; line-color: #4cba48}');
    layer.getSubLayer(1).setSQL(sqlStops4);
  });
  $('#line5').click(function() {
    layer.getSubLayer(0).setSQL(sqlLine5).setCartoCSS('#subwaylines {line-width: 3; line-color: #4cba48}');
    layer.getSubLayer(1).setSQL(sqlStops5);
  });
  $('#line6').click(function() {
    layer.getSubLayer(0).setSQL(sqlLine6).setCartoCSS('#subwaylines {line-width: 3; line-color: #4cba48}');
    layer.getSubLayer(1).setSQL(sqlStops6);
  });
  $('#line7').click(function() {
    layer.getSubLayer(0).setSQL(sqlLine7).setCartoCSS('#subwaylines {line-width: 3; line-color: #9167e0}');
    layer.getSubLayer(1).setSQL(sqlStops7);
  });
  $('#lineA').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineA).setCartoCSS('#subwaylines {line-width: 3; line-color: #2161d1}');
    layer.getSubLayer(1).setSQL(sqlStopsA);
  });
  $('#lineC').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineC).setCartoCSS('#subwaylines {line-width: 3; line-color: #2161d1}');
    layer.getSubLayer(1).setSQL(sqlStopsC);
  });
  $('#lineE').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineE).setCartoCSS('#subwaylines {line-width: 3; line-color: #2161d1}');
    layer.getSubLayer(1).setSQL(sqlStopsE);
  });
  $('#lineB').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineB).setCartoCSS('#subwaylines {line-width: 3; line-color: #e59732}');
    layer.getSubLayer(1).setSQL(sqlStopsB);
  });
  $('#lineD').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineD).setCartoCSS('#subwaylines {line-width: 3; line-color: #e59732}');
    layer.getSubLayer(1).setSQL(sqlStopsD);
  });
  $('#lineF').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineF).setCartoCSS('#subwaylines {line-width: 3; line-color: #e59732}');
    layer.getSubLayer(1).setSQL(sqlStopsF);
  });
  $('#lineM').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineM).setCartoCSS('#subwaylines {line-width: 3; line-color: #e59732}');
    layer.getSubLayer(1).setSQL(sqlStopsM);
  });
  $('#lineN').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineN).setCartoCSS('#subwaylines {line-width: 3; line-color: #e8e243}');
    layer.getSubLayer(1).setSQL(sqlStopsN);
  });
  $('#lineQ').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineQ).setCartoCSS('#subwaylines {line-width: 3; line-color: #e8e243}');
    layer.getSubLayer(1).setSQL(sqlStopsQ);
  });
  $('#lineR').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineR).setCartoCSS('#subwaylines {line-width: 3; line-color: #e8e243}');
    layer.getSubLayer(1).setSQL(sqlStopsR);
  });
  $('#lineJ').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineJ).setCartoCSS('#subwaylines {line-width: 3; line-color: #96610c}');
    layer.getSubLayer(1).setSQL(sqlStopsJ);
  });
  $('#lineZ').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineZ).setCartoCSS('#subwaylines {line-width: 3; line-color: #96610c}');
    layer.getSubLayer(1).setSQL(sqlStopsZ);
  });
  $('#lineG').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineG).setCartoCSS('#subwaylines {line-width: 3; line-color: #65d882}');
    layer.getSubLayer(1).setSQL(sqlStopsG);
  });
  $('#lineL').click(function() {
    layer.getSubLayer(0).setSQL(sqlLineL).setCartoCSS('#subwaylines {line-width: 3; line-color: #c6d1d3}');
    layer.getSubLayer(1).setSQL(sqlStopsL);
  });

  layer.getSubLayer(1).setInteraction(true);
  // layer.getSubLayer(1).on
  //points.setInteraction(true);
  //sublayer.set(subLayerOptions);
  //sublayer.infowindow.set('template', $('#infowindow_template').html());
  // layer.on('featureClick', function(e) {
  //   console.log("layer clicked");
  //   // alert("Hey! You clicked " + data.name);
  //   // fillForm(feature.properties);
  //   });
}).on('click', function(e){
  console.log(e);
});


// var nycStops = cartodb.createLayer(app.map, {
//   user_name: 'clairedouglass',
//   type: 'cartodb',
//   interactivity: true,
//   sublayers: [
//     {
//       sql: "SELECT * FROM substopstracts",
//       //cartocss: '#subwaylines { line-width: 2; line-color: #0B645E; polygon-fill: #fff; polygon-opacity: 0; line-opacity: 1;}',
//     }
//   ]
//   }).addTo(app.map).on('done', function(layer) {
//   // Set interactivity
//   layer.setInteraction(true);
//   // Set up map interaction event
//   layer.on('featureClick',function(e, latlng, pos, data) {
//     console.log(data);
//   });
//   // Add button click events, demo setCartoCSS and setSQL
//   // $('#line1').click(function() {
//   //   layer.getSubLayer(0).setSQL("SELECT * FROM substopstracts where line like '%1%'");
//   // });
// });

//Maintain separate click functions that reference original files
// $('#line1').click(function() {
//     nycStops.setSQL("SELECT * FROM substopstracts where line like '%1%'");
//     nycLines.setSQL(sqlLine1).setCartoCSS('#subwaylines {line-width: 3; line-color: #ef3e34}');
//   });


/* =================================
// The initial query by which we map the geojson representation of a table
app.geojsonClient.execute("SELECT * FROM substopstracts") // 'LIMIT' should be added to the end of this line
  .done(function(data) {
    L.geoJson(data, {
      onEachFeature: function(feature, layer) {
        layer.on('click', function() { fillForm(feature.properties); });
      }
    }).addTo(app.map);
  })
  .error(function(errors) {
  });

//Add subway lines to the map
  app.geojsonClient.execute("SELECT * FROM subway_lines") // 'LIMIT' should be added to the end of this line
    .done(function(data) {
      L.geoJson(data, {
        onEachFeature: function(feature, layer) {
          layer.on('click', function() { lineClicks(feature.properties); });
        }
      }).addTo(app.map);
    })
    .error(function(errors) {
    });

==================================*/

//filter subway lines
var sqlLine1 = "SELECT * FROM subway_lines WHERE name like '%1%'";
var sqlLine2 = "SELECT * FROM subway_lines WHERE name like '%2%'";
var sqlLine3 = "SELECT * FROM subway_lines WHERE name like '%3%'";
var sqlLine4 = "SELECT * FROM subway_lines WHERE name like '%4%'";
var sqlLine5 = "SELECT * FROM subway_lines WHERE name like '%5%'";
var sqlLine6 = "SELECT * FROM subway_lines WHERE name like '%6%'";
var sqlLine7 = "SELECT * FROM subway_lines WHERE name like '%7%'";
var sqlLineA = "SELECT * FROM subway_lines WHERE name like '%A%'";
var sqlLineC = "SELECT * FROM subway_lines WHERE name like '%C%'";
var sqlLineE = "SELECT * FROM subway_lines WHERE name like '%E%'";
var sqlLineB = "SELECT * FROM subway_lines WHERE name like '%B%'";
var sqlLineD = "SELECT * FROM subway_lines WHERE name like '%D%'";
var sqlLineF = "SELECT * FROM subway_lines WHERE name like '%F%'";
var sqlLineM = "SELECT * FROM subway_lines WHERE name like '%M%'";
var sqlLineN = "SELECT * FROM subway_lines WHERE name like '%N%'";
var sqlLineQ = "SELECT * FROM subway_lines WHERE name like '%Q%'";
var sqlLineR = "SELECT * FROM subway_lines WHERE name like '%R%'";
var sqlLineJ = "SELECT * FROM subway_lines WHERE name like '%J%'";
var sqlLineZ = "SELECT * FROM subway_lines WHERE name like '%Z%'";
var sqlLineG = "SELECT * FROM subway_lines WHERE name like '%G%'";
var sqlLineL = "SELECT * FROM subway_lines WHERE name like '%L%'";
var sqlStops1 = "SELECT * FROM substopstracts WHERE line like '%1%'";
var sqlStops2 = "SELECT * FROM substopstracts WHERE line like '%2%'";
var sqlStops3 = "SELECT * FROM substopstracts WHERE line like '%3%'";
var sqlStops4 = "SELECT * FROM substopstracts WHERE line like '%4%'";
var sqlStops5 = "SELECT * FROM substopstracts WHERE line like '%5%'";
var sqlStops6 = "SELECT * FROM substopstracts WHERE line like '%6%'";
var sqlStops7 = "SELECT * FROM substopstracts WHERE line like '%7%'";
var sqlStopsA = "SELECT * FROM substopstracts WHERE line like '%A%'";
var sqlStopsC = "SELECT * FROM substopstracts WHERE line like '%C%'";
var sqlStopsE = "SELECT * FROM substopstracts WHERE line like '%E' OR line like '%E-%'";
var sqlStopsB = "SELECT * FROM substopstracts WHERE line like '%B%'";
var sqlStopsD = "SELECT * FROM substopstracts WHERE line like '%D%'";
var sqlStopsF = "SELECT * FROM substopstracts WHERE line like '%F%'";
var sqlStopsM = "SELECT * FROM substopstracts WHERE line like '%M%'";
var sqlStopsN = "SELECT * FROM substopstracts WHERE line like '%N%'";
var sqlStopsQ = "SELECT * FROM substopstracts WHERE line like '%Q%'";
var sqlStopsR = "SELECT * FROM substopstracts WHERE line like '%R%'";
var sqlStopsJ = "SELECT * FROM substopstracts WHERE line like '%J%'";
var sqlStopsZ = "SELECT * FROM substopstracts WHERE line like '%Z%'";
var sqlStopsG = "SELECT * FROM substopstracts WHERE line like '%G%'";
var sqlStopsL = "SELECT * FROM substopstracts WHERE line like '%L%'";




//create click functions
//add SQL to clicks to filter to each line by click and associated stops
//once line is isolated, click each stop to zoom into map, display census tract and show stats in right had side of the page

// Automatically fill the form on the left from geojson response
var fillForm = function(properties) {
  $('#name').val(properties.name);
  $('#rent').val(properties.grossrent);
  $('#studio').val(properties.studio);
  $('#1bed').val(properties.x1bed);
  $('#2bed').val(properties.x2bed);
  $('#3bed').val(properties.x3bed);
};
