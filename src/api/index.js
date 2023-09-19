import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// REVIEWS
export const fetchAllReviews = () => API.get("/review/list");
export const fetchReviewCategories = () => API.get("/category");
export const getUserReviews = (category, sortType) =>
  API.get(`/review/profile/?category=${category}&sort=${sortType}`);

export const getOneReview = (id) => API.get(`/review/${id}`);
export const likeReview = (id) => API.patch(`/review/like/${id}`);
export const deleteReview = (id) => API.delete(`/review/delete/${id}`);
export const commentReview = (comment, id) =>
  API.patch(`/review/comment/${id}`, comment);

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
