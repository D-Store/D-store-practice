import axios from "axios";
import { SERVER } from "../../config/config.json";
class PostApi {
  async getBoard(boardIds) {
    const response = await axios.get(`${SERVER}/board?boardIds=[${boardIds}]`, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    });

    return response;
  }

  async CreateBoard(date, contents, profile, show) {
    const body = {
      date,
      contents,
      profile,
      show,
    };
    const response = await axios.post(`${SERVER}/board`, body, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        "content-type": "multipart/form-data",
      },
    });

    return response;
  }
}

export default new PostApi();
