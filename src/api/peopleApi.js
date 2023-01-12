import * as http from "../util/http_util";

export function fetchPeopleList(config) {
  const url = import.meta.env.VITE_SERVER_PREFIX + "people";

  return http.axiosGet(url, config);
}

export function fetchPerson(id) {
  const url = import.meta.env.VITE_SERVER_PREFIX + `people/${id}`;

  return http.axiosGet(url);
}
