import * as http from "../util/http_util";

export function fetchPeopleList() {
  const url = import.meta.env.VITE_SERVER_PREFIX + "people";

  return http.axiosGet(url);
}
