import axios from "axios";
import { SERVER } from "../../config/config.json";
class PostApi {
  async getBoard(page, size, sort) {
    const response = await axios.get(
      `${SERVER}/list?page=[${page}]&size=[${size}]&sort=[${sort}]`
      // {
      //   headers: {
      //     Authorization: localStorage.getItem("accessToken"),
      //   },
      // }
    );

    return response;
  }

  async CreateBoard(title, content, users, file) {
    const body = {
      title,
      content,
      users,
      file,
    };
    const response = await axios.post(`${SERVER}/project/create`, body, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        // "content-type": "multipart/form-data",
      },
    });

    return response;
  }
}

export default new PostApi();
