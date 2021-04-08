import axios from "axios";
class LoginApi{

    constructor(){
        
    }
    // async resiter(){

    // }

    async login(userId,password){
        const data = {userId,password}
        const response = await axios.post("https://noons.herokuapp.com/signin",data)
        
        return response;
    }
}

export default new LoginApi();