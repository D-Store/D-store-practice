import axios from "axios";
import { SERVER } from "../../config/config.json";
class AuthApi {
  constructor() {}

  async login(userId, password) {
    const body = {
      userId,
      password,
    };
    const response = await axios.post(`${SERVER}/signin`, body);

    return response;
  }
  async signUp(userId, password, name, genderId) {
    const body = {
      userId,
      password,
      name,
      genderId,
    };
    const response = await axios.post(`${SERVER}/signup`, body);

    return response;
  }
}

export default new AuthApi();
