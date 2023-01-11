import axios from "axios";
import * as _ from "lodash/core";

let injectHeaders = {};

export function axiosGet(url, config = {}) {
  const resultConfig = enrichAxiosHeaders(config);
  return axios.get(url, resultConfig);
}

export function axiosPost(url, data, config = {}) {
  const resultConfig = enrichAxiosHeaders(config);
  return axios.post(url, data, resultConfig);
}

export function axiosDelete(url, config = {}) {
  const resultConfig = enrichAxiosHeaders(config);
  return axios.delete(url, resultConfig);
}

function enrichAxiosHeaders(config) {
  if (typeof config == "undefined" || config == null) config = {};

  if (!_.isEmpty(injectHeaders)) {
    if (typeof config.headers == "undefined" || config.headers == null)
      config.headers = {};

    for (const [key, value] of Object.entries(injectHeaders)) {
      config.headers[key] = value;
    }
  }
  return config;
}
