import axios from "axios";
import {SERVER} from '../../config/config.json'
class LoginApi{

    constructor(){
        
    }

    async login(userId,password){
        
        const data = {userId,password}
        const response = await axios.post(`${SERVER}/signin`,data)
        
        return response;
    }
}

export default new LoginApi();