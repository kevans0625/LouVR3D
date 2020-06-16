import axios from "axios";
const METURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=";
const METOBJECTURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";
const harvardAPI = "";
const harvardAPIKey = "5e4cb7f0-a534-11ea-888a-71ff56d3b1a0";

export default {
  // Gets all users
  getUsers: function(userData) {
    console.log(userData)
    return axios.get("/api/user");
  },
  // Gets the User with the given id
  getUser: function(id){
    return axios.get("/api/user/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  modifyUser: function(_id, body) {
    return axios.put("/api/user/" + _id, body);
  },
  // Saves a User to the database
  saveUser: function(userData) {
    console.log(userData)
    return axios.post("/api/user", userData);
  },
  // Gets all users
 loginUser: function(userData) {
    console.log(userData)
    return axios.post("/api/login", userData);
    },
  imageUpload: function(imageData) {
      console.log(imageData)
      return axios.post("/api/images/upload", imageData)
  },
  allImages: function(Data) {
    console.log(Data)
  return axios.all(Data)
  },
  getImages: function() {
    return axios.get("/api/images")
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
    return axios.post("/api/exhibit", imageData)
  },
  // Load favorites
  loadFavorites: function(userID) {
    return axios.get("/api/exhibit/" + userID)
  },
  loadAllFavorites: function() {
    return axios.get("/api/exhibit")
  } 
};