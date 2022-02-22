import Axios from "axios";

const header = {
  "Access-Control-Allow-Origin": "*",
};

const httpClient = Axios.create({
  baseURL: process.env.REACT_API_BASE_URL,
  headers: header,
});

export default httpClient;
