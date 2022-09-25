import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(fullname,username, email, password,mobile,address) {
    return axios.post(API_URL + "signup", {
      fullname,
      username,
      email,
      password,
      mobile,
      address
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getUserDetails(usernameid) {
    return axios.get(API_URL + `admin/${usernameid}`, { headers: authHeader() });
  }

}

export default new AuthService();
