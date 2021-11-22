'use strict';
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    position => {
      // TODO Get latitude and longitude from geolocation
      const { latitude, longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
      const coords = [-2.2875, 102.7146];
      // const coords = [latitude, longitude];

      // TODO leaflet
      const map = L.map('map').setView(coords, 15);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      // console.log(map);

      map.on('click', function (mapEvent) {
        console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;

        // TODO leaflet Marker: https://leafletjs.com/reference.html#marker
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: '.running-popup',
            })
          )
          // https://leafletjs.com/reference.html#layer
          .setPopupContent('Pin 📍')
          .openPopup();
      });
    },
    function () {
      alert('Could not get your position');
    }
  );
