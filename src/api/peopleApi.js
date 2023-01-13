import * as http from "../util/http_util";

// request to get all people
//in config indicate page and per page params
export function fetchPeopleList(config) {
  const url = import.meta.env.VITE_SERVER_PREFIX + "people";

  return http.axiosGet(url, config);
}

//request to get person information
//id - person id
export function fetchPerson(id) {
  const url = import.meta.env.VITE_SERVER_PREFIX + `people/${id}`;

  return http.axiosGet(url);
}

// request to edit person data
//data - string of user parameters to be changed
//config - headers (accessToken)
//id - person id
export function editPerson(data, config, id) {
  const url = import.meta.env.VITE_SERVER_PREFIX + `people/${id}`;

  return http.axiosPost(url, data, config);
}
