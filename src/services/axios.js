import axios from "axios";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import { ServerURI } from "../configs";

export function getAPIClient(ctx) {
  const { "smc.tk": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: ServerURI,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        toast.error("O tempo de sua seção expirou, faça login novamente.");
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }
      return Promise.reject(error);
    }
  );

  return api;
}
