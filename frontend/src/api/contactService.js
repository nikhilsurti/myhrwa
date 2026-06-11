import API from "./api";

export const sendContactMessage = (data) => {
  return API.post("/contact/", data);
};