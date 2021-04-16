import axios from "axios";
import { SERVER } from "../../../config/config.json";

class UserListApi {

    async getUserList() {

        const response = await axios.get(`${SERVER}/admin/userlist`)

        return response;
    }

    async deleteUser(id) {

        const response = await axios.delete(`${SERVER}/admin/deleteuser?id=${id}`)

        return response
    }
}

export default new UserListApi();