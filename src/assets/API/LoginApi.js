import axios from "axios";
import {SERVER} from '../../config/config.json'
class LoginApi{

    constructor(){
        
    }

    async login(userId,password){
        
        const body = {
            userId,
            password
        }
        const response = await axios.post(`${SERVER}/signin`,body)
        
        return response;
    }
}

export default new LoginApi();