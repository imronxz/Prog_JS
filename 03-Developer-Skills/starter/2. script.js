const exDebug = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    //! C) FIX
    value: prompt('Degrees celsius: '),
  };

  //? B) FIND
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(exDebug());
