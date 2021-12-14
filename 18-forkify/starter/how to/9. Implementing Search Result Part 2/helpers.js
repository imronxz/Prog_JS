import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

// TODO setTimers for fetching data
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// TODO this getJSON will get url
export const getJSON = async url => {
  try {
    const fetchPromise = fetch(url);
    const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data; // Result value from promises
  } catch (err) {
    throw new Error(err);
  }
};
