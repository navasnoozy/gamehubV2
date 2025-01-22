import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "010c4cb879d543ecab45fb556851e274",
  },
});
