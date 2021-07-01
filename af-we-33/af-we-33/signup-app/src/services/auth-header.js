export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };//return http authorization header if there is a logged in user with accessToken-JWT
    } else {
      return {};//otherwise return an empty object
    }
  }
  