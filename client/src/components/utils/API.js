import axios from "axios";
const METURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the User with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a User to the database
  saveUser: function(userData) {
    console.log(userData)
    return axios.post("/api/user", userData);
  },
   imageUpload: function(imageData) {
      console.log(imageData)
      return axios.post("/api/images/upload", imageData)
  },
  allImages: function(Data) {
    console.log(Data)
  return axios.all(Data)
  },

  // Met API Call
  getMet: function(query) {
    return axios.get(METURL + query)
  }
};
