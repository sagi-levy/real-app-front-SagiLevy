import axios from "axios";
import config from "../../config.json";
axios.defaults.baseURL = config.apiUrl;
export function setCommonHeader(headerName, value) {
  axios.defaults.headers.common[headerName] = value;
}
export const httpRequestDetails = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
};
export default httpRequestDetails;
