// src/get.ts
import axios from "axios";
function get(options) {
  const { bearerToken, queryParams, url } = options;
  const headers = {};
  if (bearerToken) {
    headers["Authorization"] = `Bearer ${bearerToken}`;
  }
  axios.get(url, {
    headers,
    params: queryParams
  });
}
export {
  get
};
//# sourceMappingURL=index.mjs.map