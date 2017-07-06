$(document).ready(function() {
  $('form').submit(function(event) {
      event.preventDefault();
      var city = $('#city-type').val();
      if (city === "nyc" || "new york city") {
        $('body').css('background-image', 'url(images/nyc.jpg)');

      }
      if (city === "la" || "los angeles") {
        $('body').css('background-image', 'url(images/la.jpg)');

      }

        if (city === "sf" || "san francisco") {
          $('body').css('background-image', 'url(images/sf.jpg)');

        }

        if (city === "syd" || "sydney") {
          $('body').css('background-image', 'url(images/sydney.jpg)');

        }

        if (city === "austin") {
          $('body').css('background-image', 'url(images/austin.jpg)');

        }
    });

/*var cities = ['nyc', 'la', 'sf', 'sydney', 'austin'];
debugger;
cities.forEach(function(city){
  if (lowerCase === city) {
    $('body').css('background-image', 'url(images/' + city + ' .jpg)');
}
});*/
