import axios from "axios";

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
      return axios.post("/api/uploadImages", imageData)
  },
  allImages: function(Data) {
    console.log(Data)
  return axios.all(Data)
}
};
