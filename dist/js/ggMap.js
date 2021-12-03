var map;
var data = [
    { "id": "213241", "trip_id": "29054", "location_lat": "9.86217498779", "location_lon": "106.44523620605", "location_stop": "0", "location_speed": "3.45882", "location_distance": "17", "percen": "6.0259", "created_at": "2021-11-24 02:49:49", "updated_at": "2021-11-24 02:49:50" },
    { "id": "213242", "trip_id": "29054", "location_lat": "9.86216545105", "location_lon": "106.44522094727", "location_stop": "1", "location_speed": "0.646826", "location_distance": "5", "percen": "5.93951", "created_at": "2021-11-24 02:49:58", "updated_at": "2021-11-24 02:49:59" },
    { "id": "213243", "trip_id": "29054", "location_lat": "9.86216545105", "location_lon": "106.44522094727", "location_stop": "0", "location_speed": "0.646826", "location_distance": "38", "percen": "5.38874", "created_at": "2021-11-24 02:51:29", "updated_at": "2021-11-24 02:51:30" },
    { "id": "213244", "trip_id": "29054", "location_lat": "9.86183357239", "location_lon": "106.44510650635", "location_stop": "0", "location_speed": "2.21453", "location_distance": "38", "percen": "5.38874", "created_at": "2021-11-24 02:51:29", "updated_at": "2021-11-24 02:51:30" },
    { "id": "213245", "trip_id": "29054", "location_lat": "9.86180019379", "location_lon": "106.44509887695", "location_stop": "1", "location_speed": "0.662251", "location_distance": "1", "percen": "5.45156", "created_at": "2021-11-24 02:51:36", "updated_at": "2021-11-24 02:51:38" },
    { "id": "213246", "trip_id": "29054", "location_lat": "9.86180019379", "location_lon": "106.44509887695", "location_stop": "0", "location_speed": "0.662251", "location_distance": "37", "percen": "5.33858", "created_at": "2021-11-24 02:52:04", "updated_at": "2021-11-24 02:52:05" },
    { "id": "213247", "trip_id": "29054", "location_lat": "9.86146450043", "location_lon": "106.44505310059", "location_stop": "0", "location_speed": "4.54166", "location_distance": "37", "percen": "5.33858", "created_at": "2021-11-24 02:52:04", "updated_at": "2021-11-24 02:52:06" },
    { "id": "213248", "trip_id": "29054", "location_lat": "9.86101245880", "location_lon": "106.44495391846", "location_stop": "0", "location_speed": "5.41832", "location_distance": "51", "percen": "4.38999", "created_at": "2021-11-24 02:52:13", "updated_at": "2021-11-24 02:52:14" },
    { "id": "213249", "trip_id": "29054", "location_lat": "9.86051559448", "location_lon": "106.44486236572", "location_stop": "0", "location_speed": "6.61171", "location_distance": "55", "percen": "4.15488", "created_at": "2021-11-24 02:52:23", "updated_at": "2021-11-24 02:52:23" },
    { "id": "213250", "trip_id": "29054", "location_lat": "9.86002731323", "location_lon": "106.44477081299", "location_stop": "0", "location_speed": "6.44101", "location_distance": "54", "percen": "4.26112", "created_at": "2021-11-24 02:52:31", "updated_at": "2021-11-24 02:52:32" },
    { "id": "213251", "trip_id": "29054", "location_lat": "9.85954666138", "location_lon": "106.44468688965", "location_stop": "0", "location_speed": "4.22802", "location_distance": "53", "percen": "4.14859", "created_at": "2021-11-24 02:52:40", "updated_at": "2021-11-24 02:52:41" },
    { "id": "213252", "trip_id": "29054", "location_lat": "9.85944938660", "location_lon": "106.44464874268", "location_stop": "0", "location_speed": "2.23561", "location_distance": "11", "percen": "4.31819", "created_at": "2021-11-24 02:52:43", "updated_at": "2021-11-24 02:52:44" },
    { "id": "213253", "trip_id": "29054", "location_lat": "9.85936927795", "location_lon": "106.44460296631", "location_stop": "0", "location_speed": "3.84805", "location_distance": "10", "percen": "4.70863", "created_at": "2021-11-24 02:52:47", "updated_at": "2021-11-24 02:52:48" },
    { "id": "213254", "trip_id": "29054", "location_lat": "9.85892486572", "location_lon": "106.44451904297", "location_stop": "0", "location_speed": "5.32629", "location_distance": "50", "percen": "4.30279", "created_at": "2021-11-24 02:52:57", "updated_at": "2021-11-24 02:52:58" },
    { "id": "213255", "trip_id": "29054", "location_lat": "9.85848236084", "location_lon": "106.44442749023", "location_stop": "0", "location_speed": "4.99825", "location_distance": "50", "percen": "4.18771", "created_at": "2021-11-24 02:53:07", "updated_at": "2021-11-24 02:53:08" },
    { "id": "213256", "trip_id": "29054", "location_lat": "9.85807228088", "location_lon": "106.44436645508", "location_stop": "0", "location_speed": "4.1149", "location_distance": "45", "percen": "4.16051", "created_at": "2021-11-24 02:53:15", "updated_at": "2021-11-24 02:53:16" },
    { "id": "213257", "trip_id": "29054", "location_lat": "9.85797023773", "location_lon": "106.44432067871", "location_stop": "0", "location_speed": "1.52297", "location_distance": "12", "percen": "3.54553", "created_at": "2021-11-24 02:53:25", "updated_at": "2021-11-24 02:53:26" },
    { "id": "213258", "trip_id": "29054", "location_lat": "9.85787487030", "location_lon": "106.44429779053", "location_stop": "0", "location_speed": "1.22732", "location_distance": "10", "percen": "4.52453", "created_at": "2021-11-24 02:53:30", "updated_at": "2021-11-24 02:53:31" },
    { "id": "213259", "trip_id": "29054", "location_lat": "9.85778236389", "location_lon": "106.44428253174", "location_stop": "0", "location_speed": "2.23664", "location_distance": "10", "percen": "5.99687", "created_at": "2021-11-24 02:53:37", "updated_at": "2021-11-24 02:53:38" },
    { "id": "213260", "trip_id": "29054", "location_lat": "9.85729026794", "location_lon": "106.44418334961", "location_stop": "0", "location_speed": "4.78384", "location_distance": "55", "percen": "4.37359", "created_at": "2021-11-24 02:53:47", "updated_at": "2021-11-24 02:53:48" },
    { "id": "213261", "trip_id": "29054", "location_lat": "9.85681819916", "location_lon": "106.44403839111", "location_stop": "0", "location_speed": "5.80498", "location_distance": "54", "percen": "5.63593", "created_at": "2021-11-24 02:53:58", "updated_at": "2021-11-24 02:53:59" },
    { "id": "213262", "trip_id": "29054", "location_lat": "9.85637855530", "location_lon": "106.44390869141", "location_stop": "0", "location_speed": "5.91861", "location_distance": "50", "percen": "4.889", "created_at": "2021-11-24 02:54:05", "updated_at": "2021-11-24 02:54:06" },
    { "id": "213263", "trip_id": "29054", "location_lat": "9.85590553284", "location_lon": "106.44374084473", "location_stop": "0", "location_speed": "5.7911", "location_distance": "55", "percen": "5.07121", "created_at": "2021-11-24 02:54:15", "updated_at": "2021-11-24 02:54:16" },
    { "id": "213264", "trip_id": "29054", "location_lat": "9.85544776917", "location_lon": "106.44360351562", "location_stop": "0", "location_speed": "5.36434", "location_distance": "52", "percen": "5.53467", "created_at": "2021-11-24 02:54:24", "updated_at": "2021-11-24 02:54:25" },
    { "id": "213265", "trip_id": "29054", "location_lat": "9.85501384735", "location_lon": "106.44346618652", "location_stop": "0", "location_speed": "5.5736", "location_distance": "50", "percen": "4.58491", "created_at": "2021-11-24 02:54:32", "updated_at": "2021-11-24 02:54:33" }
];
function initMap() {
    var listLocation = [];
    for (i = 1; i < data.length; i++) {
        listLocation.push(
            {
                "lat": parseFloat(data[i].location_lat),
                "lng": parseFloat(data[i].location_lon)
            }
        );
    }
    var mapOptions = {
        center: listLocation[0],
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        fullscreenControl: false,
    }
    map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);


    const poly = new google.maps.Polyline({
        path: listLocation,
        strokeColor: 'orange',
        strokeWeight: 5,

    });
    var icon = {
        url: "./dist/img/mark.png",
        scaledSize: new google.maps.Size(50, 50), // scaled size
    }
    var marker = new google.maps.Marker({
        position: listLocation[0],
        title: "Marker 1",
        icon: icon,
        animation: google.maps.Animation.DROP
    })
    var marker2 = new google.maps.Marker({ position: listLocation[listLocation.length - 1], icon: icon })
    marker.setMap(map);
    marker2.setMap(map);
    poly.setMap(map);
    var infowindow = new google.maps.InfoWindow({
        content: "<h1>Hello</h1>",
    })
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    })
};