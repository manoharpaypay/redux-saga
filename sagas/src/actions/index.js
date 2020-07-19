import { call, put } from 'redux-saga/effects';

import * as TYPES from '../types';

export const api = (url) =>
  fetch(url, { mode: 'cors' }).then((response) => response.json());

export const fetchStarWarsRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_REQUEST,
});

export function* fetchPerson(action) {
  try {
    console.log('calling saga');
    const person = yield call(api, 'https://swapi.dev/api/people/');
    yield put({ type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results });
  } catch (e) {
    console.log(e);
  }
}
