import axios from "axios";
const METURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=";
const METOBJECTURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

const harvardAPI = "";
const harvardAPIKey = "5e4cb7f0-a534-11ea-888a-71ff56d3b1a0";

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
  },
  getMetImages: function(id){

    return axios.get(METOBJECTURL+ id)
  },

  // Save image to mongo
  saveImage: function(imageData) {
    return axios.post("/api/exhibits", imageData)

  }
};