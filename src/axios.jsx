import axios from "axios";

const url = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
});
export default url;
