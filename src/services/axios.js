import axios from "axios";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import { ServerURI } from "~/configs/server-config";

export function getAPIClient(ctx) {
  const { atk: token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: ServerURI,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Content-Type": "application/json;charset=UTF-8",
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
            destination: "/acesso",
            permanent: false,
          },
        };
      }
      return Promise.reject(error);
    }
  );

  return api;
}
