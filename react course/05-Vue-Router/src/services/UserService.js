import axios from "axios";

export class UserService {

  static getAllUsers() {
    let dataURL = `https://jsonplaceholder.typicode.com/users`;
    return axios.get(dataURL);
  }

  static getUser(userId) {
    let dataURL = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return axios.get(dataURL);
  }

}