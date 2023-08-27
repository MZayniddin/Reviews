import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

// AUTH
export const googleLogin = (token) =>
  API.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );

export const signIn = (formData) => API.post("user/signin", formData);
export const signUp = (formData) => API.post("user/signup", formData);
