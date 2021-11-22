// TODO Move to Marker on Click
/*
class Workout {
  clicks = 0;
  // TODO click
  click() {
    this.clicks++;
  }
}
// TODO renderWorkouts methods
_moveToPopup(e) {
      const workoutEl = e.target.closest('.workout');
      console.log(workoutEl);

      if (!workoutEl) return;
      const workout = this.#workouts.find(
        work => work.id === workoutEl.dataset.id
      );
      console.log(workout);
      this.#map.setView(workout.coords, this.#mapZoomLevel, {
        animate: true,
        pan: {
          duration: 1,
        },
      });

      TODO Using public interface
      workout.click();
*/
'use strict';

class Workout {
  date = new Date();
  id = Date.now() + ''.slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
  // TODO setDescription date methods
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  // TODO click
  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence; // in rpm
    this.calcPace(); // immediately call the function
    this._setDescription();
  }
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain; // in m
    this.calcSpeed(); // immediately call the function
    this._setDescription();
  }
  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([-2.2875, 102.7146], 5.2, 24, 178);
const cyc1 = new Cycling([-2.2875, 102.7146], 27, 95, 520);
console.log(run1, cyc1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
///////////////////////////////////////
// TODO APPLICATION ARCHITECTURE
class App {
  // TODO Private property
  #map;
  #mapZoomLevel = 15;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition(); // immediately call the function
    // ? Handling submit form with marker
    form.addEventListener('submit', this._newWorkout.bind(this));
    // ? Handling change toggle elevation field
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
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
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

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
  // TODO hideForm methods
  _hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  // TODO toggleElevationField methods
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  // TODO newWorkout methods
  _newWorkout(e) {
    // * Helper function
    const isNumber = (...inputs) => inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // * Get Data from the form inputs
    const type = inputType.value;
    const distance = +inputDistance.value; // convert to number
    const duration = +inputDuration.value; // convert to number
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // * Check if data is valid

    // * If workout running then creat running object
    if (type === 'running') {
      const cadence = +inputCadence.value; // convert to number
      // ? checks if data is valid -> Must be an numbers
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !isNumber(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Input have to be positive numbers...🔢');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // * If workout cycling then creat cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value; // convert to number
      if (
        !isNumber(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Input have to be positive numbers...🔢');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // * Add new object to the workout array
    this.#workouts.push(workout);
    console.log(workout);

    // * Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // * Render workout on list as list item
    this._renderWorkout(workout);

    // * Hide form + clear map as marker

    // *  Clear input fieldset
    this._hideForm();
  }

  // TODO renderWorkoutMarker methods
  _renderWorkoutMarker(workout) {
    // ? Display marker
    // console.log(this.#mapEvent);
    // const { lat, lng } = this.#mapEvent.latlng;
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }
  // TODO renderWorkout methods
  _renderWorkout(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
    `;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
    `;

    form.insertAdjacentHTML('afterend', html); // added sibling element at the end of the form
  }
  // TODO renderWorkouts methods
  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);

    if (!workoutEl) return;
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    console.log(workout);
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // * Using public interface
    workout.click();
  }
}

const app = new App();
