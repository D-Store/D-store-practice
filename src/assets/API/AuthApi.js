import axios from "axios";
import { SERVER } from "../../config/config.json";
class AuthApi {
  async login(email, password) {
    const body = {
      email,
      password,
    };
    const response = await axios.post(`${SERVER}/auth/login`, body);

    return response;
  }
  async signUp(email, password, name) {
    const body = {
      email,
      password,
      name,
    };
    const response = await axios.post(`${SERVER}/auth/create`, body);

    return response;
  }

  async authEmail(email) {
    const response = await axios.get(`${SERVER}/auth/send/email?mail=${email}`);
    return response;
  }
}

export default new AuthApi();
