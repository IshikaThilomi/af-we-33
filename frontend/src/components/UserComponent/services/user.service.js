import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://afwe3.herokuapp.com/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  getEditorProfile() {
    return axios.get(API_URL + 'editor', { headers: authHeader() });
  }

  getReviewerProfile() {
    return axios.get(API_URL + 'reviewer', { headers: authHeader() });
  }

  updateProfile(user) {
    return axios.put(API_URL + 'user', user,{ headers: authHeader() });
  }
}

export default new UserService();
