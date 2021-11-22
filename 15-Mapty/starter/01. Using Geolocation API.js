'use strict';
// TODO Working with geolocation(latitude, longitude)
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    position => {
      // TODO Get latitude and longitude from geolocation
      const { latitude, longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },
    function () {
      alert('Could not get your position');
    }
  );
