import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://sheltered-beyond-58641.herokuapp.com/api"
      : "http://localhost:3001/api",
});
