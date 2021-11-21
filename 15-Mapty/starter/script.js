'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = Date.now() + ''.slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence; // in rpm
    this.calcPace(); // immediately call the function
  }
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain; // in m
    this.calcSpeed(); // immediately call the function
  }
  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([-2.2875, 102.7146], 5.2, 24, 178);
// const cyc1 = new Cycling([-2.2875, 102.7146], 27, 95, 520);
// console.log(run1, cyc1);

///////////////////////////////////////
// TODO APPLICATION ARCHITECTURE
class App {
  // TODO Private property
  #map;
  #mapEvent;
  constructor() {
    this._getPosition(); // immediately call the function

    // TODO Handling submit form with marker
    form.addEventListener('submit', this._newWorkout.bind(this));

    // TODO Handling change toggle elevation field
    inputType.addEventListener('change', this._toggleElevationField);
  }

  // TODO GeoLocation
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  // TODO loadMap current position
  _loadMap(position) {
    // * Get latitude and longitude from geolocation
    const { latitude, longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const coords = [-2.2875, 102.7146];
    // const coords = [latitude, longitude];

    // console.log(this);

    // * leaflet
    this.#map = L.map('map').setView(coords, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    // console.log(map);

    // * leaflet event(on): show form when click on map
    this.#map.on('click', this._showForm.bind(this));
  }

  // TODO showForm methods
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  // TODO toggleElevationField methods
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  // TODO newWorkout methods
  _newWorkout(e) {
    e.preventDefault();

    // Clear input fieldset
    inputDistance.value = inputDuration.value = inputCadence.value = '';

    // Display marker
    // console.log(this.#mapEvent);
    const { lat, lng } = this.#mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: '.running-popup',
        })
      )
      .setPopupContent('Workout! (⓿_⓿)')
      .openPopup();
  }
}
const app = new App();
