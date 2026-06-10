import API from "./api";

// All resumes
export const getResumes = () => {
  return API.get("/resumes/");
};

// Single resume
export const getResume = (id) => {
  return API.get(`/resumes/${id}/`);
};

// Create
export const createResume = (data) => {
  return API.post("/resumes/", data);
};

// Update
export const updateResume = (id, data) => {
  return API.put(`/resumes/${id}/`, data);
};

// Delete
export const deleteResume = (id) => {
  return API.delete(`/resumes/${id}/`);
};

// Download PDF
export const downloadResume = (id) => {
  return API.get(`/resumes/${id}/download/`, {
    responseType: "blob",
  });
};

// Parse Resume
export const parseResume = (formData) => {
  return API.post("/resumes/parse/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};