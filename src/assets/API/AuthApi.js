import axios from "axios";
import { SERVER } from "../../config/config.json";
class AuthApi {
  async login(userId, password) {
    const body = {
      userId,
      password,
    };
    const response = await axios.post(`${SERVER}/signin`, body);

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
}

export default new AuthApi();
