import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://127.0.0.1:8080";

export const ApiInstance = () => {
  return axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const AuthApiInstance = axios.create({
  baseURL: `${API_URL}/api/auth`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const FranchiseApiInstance = axios.create({
  baseURL: `${API_URL}/api/franchise`,
  headers: {
    "Content-Type": "application/json",
  },
});
