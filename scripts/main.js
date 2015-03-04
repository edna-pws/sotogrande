

var util = {
    Global: {
        init: function () {

            var e = this;
            e.preloader();
            e.headerBannerLayout();
            e.headerResize();
            e.showMap();

        },


        headerBannerLayout: function() {
                
            function bannerLayout() {
                var t = ($(window).height() - 82) + "px";
    
                $(".home .l-banner").css("height", t);

                   t = $(window).height() + "px";

                // var newBannerHeight = $('.home .l-banner').height();

                // $(".carousel-inner .item").css("height", newBannerHeight );


                $(window).scroll(function() {
                  //Get the scoll position of the page
                    var scrollPos = $(this).scrollTop();

                    //Scroll and fade out the banner text
                    $('.banner-caption').css({
                      'margin-top' : -(scrollPos/5)+"px",
                      'opacity' : 1-(scrollPos/300)
                    });
                    //Scroll and fade out the banner text
                    $('.topbar').css({
                      'opacity' : 1-(scrollPos/800)
                    }); 
                });
            }

            var callback = function() {
                bannerLayout();

            };

            bannerLayout();

            $(document).ready(callback);
            $(window).resize(callback);


        },
        headerResize: function() {
            function headerResize() {
              var st = $(window).scrollTop(),
                  set = 200;
                  if (st > set) {
                    $('.nav.navbar-nav').addClass('m1');
                    $('.navbar-brand > img').addClass('img-small');
                    $('.navbar-top').addClass('h70');
                  } else {
                    $('.nav.navbar-nav').removeClass('m1');
                    $('.navbar-brand > img').removeClass('img-small');
                    $('.navbar-top').removeClass('h70');
                  }
            }
            $(window).on('scroll', headerResize);

        },

        preloader: function() {

            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({'overflow':'visible'}); 

        },

        showMap: function() {

           (function() {
        window.onload = function() {
            // Creating a new map
            var map = new google.maps.Map(document.getElementById("map"), {
                center: new google.maps.LatLng(10.300141, 124.016376),
                zoom: 15,
                disableDefaultUI: true,
                scrollwheel: false,
                disableDoubleClickZoom: true,
                draggable: true,
                mapTypeControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL
                }
            });
            var styles = [{
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 0
                }]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [{
                    lightness: 100
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#d2d2d2'
                }]
            }];
            map.setOptions({
                styles: styles
            });
            // Create marker icon
            var image = new google.maps.MarkerImage(
                'images/icons/map-marker.png',
                new google.maps.Size(48, 48),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 24)
            );
            // Creating the JSON data
            var json = [
                    //
                    {
                        'title': '<i class="fa fa-map-marker"></i> La Mirada Hotel',
                        'lat': 10.3004099,
                        'lng': 124.0150216,
                        'description': '<div id="listName-interestpoint1" class="mapContent"><h3>La Mirada Hotel</h3>' +
                            '<span>Dap-Dap, Mactan, Lapu-Lapu City 6015 Cebu</span>' +
                            '<a target="_blank" href="/" class="">More Info</a><a target="_blank" href="">Get Directions</a></div>',
                        'marker': null
                    },
                    //
                    {
                        'title': '<i class="fa fa-map-marker"></i> La Breza Hotel',
                        'lat': 14.641341,
                        'lng': 121.037057,
                        'description': '<div id="listName-interestpoint2" class="mapContent"><h3>La Breza Hotel</h3>' +
                            '<span>Mother Ignacia Ave Diliman, Manila 7876 Metro Manila, Philippines</span>' +
                            '<a target="_blank" href="/" class="">More Info</a><a target="_blank" href="">Get Directions</a></div>',
                        'marker': null
                    },
                    //
                    {
                        'title': '<i class="fa fa-map-marker"></i> Stradella Hotel',
                        'lat': 30.2625927,
                        'lng': -87.6134412,
                        'description': '<div id="listName-interestpoint3" class="mapContent"><h3>Stradella Hotel</h3>' +
                            '<span>24060 Perdido Beach Blvd<br>Orange Beach, Alabama 36561</span>' +
                            '<a target="_blank" href="/" class="">More Info</a><a target="_blank" href="">Get Directions</a></div>',
                        'marker': null
                    },
                    {
                        'title': '<i class="fa fa-map-marker"></i> Wyndham Hotel',
                        'lat': 30.2625927,
                        'lng': -87.6134412,
                        'description': '<div id="listName-interestpoint3" class="mapContent"><h3>Stradella Hotel</h3>' +
                            '<span>24060 Perdido Beach Blvd<br>Orange Beach, Alabama 36561</span>' +
                            '<a target="_blank" href="/" class="">More Info</a><a target="_blank" href="">Get Directions</a></div>',
                        'marker': null
                    },
                    {
                        'title': '<i class="fa fa-map-marker"></i> Marriot Suites',
                        'lat': 30.2625927,
                        'lng': -87.6134412,
                        'description': '<div id="listName-interestpoint3" class="mapContent"><h3>Stradella Hotel</h3>' +
                            '<span>24060 Perdido Beach Blvd<br>Orange Beach, Alabama 36561</span>' +
                            '<a target="_blank" href="/" class="">More Info</a><a target="_blank" href="">Get Directions</a></div>',
                        'marker': null
                    }
                ]
                // Creating a global infoWindow object that will be reused by all markers
            var infoWindow = new google.maps.InfoWindow();
            // Looping through the JSON data
            for (var i = 0, length = json.length; i < length; i++) {
                var data = json[i],
                    latLng = new google.maps.LatLng(data.lat, data.lng);
                // Creating a marker and putting it on the map
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: data.title,
                    icon: image
                });
                data.marker = marker;
                // Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
                (function(marker, data) {
                    // Attaching a click event to the current marker
                    google.maps.event.addListener(marker, "click", function(e) {
                        infoWindow.setContent(data.description);
                        infoWindow.open(map, marker);
                        //infoWindowOptions.maxWidth(300);
                        //infoWindowOptions.maxHeight(300);
                    });
                    //build the property list dynamically based on what points we are creating
                    //add the property list items
                    var $li = $("<li>" + data.title + "</li>");
                    //put a unique class on each li so we can target it based on what page they are on
                    if (typeof(data.pageid) != "undefined") {
                        var pageids = data.pageid.split(",");
                        for (var i = 0; i < pageids.length; i++) {
                            $li.addClass("mapPageId" + pageids[i]);
                        }
                    }
                    //if someone clicks the li then show the info window for the point it relates to
                    $li.click(function() {
                        google.maps.event.trigger(data.marker, 'click');
                    });
                    $("#mapLegend").append($li);
                })(marker, data);
            }
            //auto click a point if we're on its page
            var bodyPageId = $("body").attr("id").replace("pageid", "");
            $("li.mapPageId" + bodyPageId).click();
        }
    })();
    $(window).load(function() {
        function EvaluateDeviceWidth() {
                var listPosition = (($(window).width() - $('.container').width()) / 2) + "px";
                // $('#pointsList').css('right', listPosition);
            }
            //EVALUATE ON WINDOW RESIZE
        $(window).resize(EvaluateDeviceWidth);
        //EVALUATE ON DOCUMENT LOAD
        EvaluateDeviceWidth();
    });

        },

      }
};


(function($){

jQuery(document).ready(function() {
    util.Global.init();
});

})(jQuery);



