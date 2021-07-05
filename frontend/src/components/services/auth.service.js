import axios from 'axios';

const API_URL = "https://afwe3.herokuapp.com/api/auth/";
class AuthService {
  //save JWT to local storage
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
        
      },{crossDomain:true} )
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
//remove JWT from local storage
  logout() {
    localStorage.removeItem("user");
  }
  register (username, email, role, password, phone, address) {
    return axios.post(API_URL + "signup", {
        username,
        email,
        role,
        password,
        phone,
        address
        });
  }

//get stored user information including JWT
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
