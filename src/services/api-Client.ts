export interface FetchedResType<T> {
  count: number;
  next: string | null;
  results: T[];
}

import Axios, { AxiosRequestConfig } from "axios";

const axiosInstance = Axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "010c4cb879d543ecab45fb556851e274",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchedResType<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getGame = (slug: string) => {
    return axiosInstance.get<T>(this.endpoint +'/' + slug).then((res) => res.data);
  };
}

export default APIClient;
