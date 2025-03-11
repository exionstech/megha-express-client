import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://127.0.0.1:8080";

export const FranchiseApiInstance = axios.create({
  baseURL: `${API_URL}/api/franchise`,
  headers: {
    "Content-Type": "application/json",
  },
});
