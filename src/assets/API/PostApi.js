import axios from "axios";
import { SERVER } from "../../config/config.json";
class PostApi {
  async getBoard(page, size) {
    const response = await axios.get(
      `${SERVER}/project/list?page=${page}&size=${size}&sort=id,desc`
      // {
      //   headers: {
      //     Authorization: localStorage.getItem("accessToken"),
      //   },
      // }
    );

    return response;
  }

  async CreateBoard(files) {
    const response = await axios.post(`${SERVER}/project/create`, files, {
      headers: {
        ContentType: "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });

    return response;
  }
}

export default new PostApi();
