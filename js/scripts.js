// Call API

$.getJSON('//ip-api.com/json?callback=?', function(data) {
  var text = JSON.stringify(data, null, 2);
  console.log(text);
  // $('#response').html(text);
  $('#as').text(data.as);
  $('#city').text(data.city);
  $('#country').text(data.country);
  $('#countryCode').text(data.countryCode);
  $('#isp').text(data.isp);
  $('#lat').text(data.lat);
  $('#lon').text(data.lon);
  $('#org').text(data.org);
  $('#query').text(data.query);
  $('#region').text(data.region);
  $('#regionName').text(data.regionName);
  $('#timezone').text(data.timezone);
  $('#zip').text(data.zip);

  typeItOut();
});

// Show text
function typeItOut() {
  $(function() {
    $("#typed").typed({
      stringsElement: $('#src'),
      cursorChar: '&#9612;'
    });
  });
}
