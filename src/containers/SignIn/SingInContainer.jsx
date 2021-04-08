import React, { useState } from 'react'
import SignIn from '../../components/SignIn/SignIn';
import axios from 'axios'
import LoginApi from "../../assets/API/LoginApi"

const SingInContainer = () => {

    const [userId,setUserId] = useState("")

    const [password,setUserPw] = useState("")

    // const data = {userId,password}

    const onChangeUserId = (e) => {
        
        setUserId(e.target.value)

    }

    const onChangeUserPw = (e) => {
        
        setUserPw(e.target.value)

    }

    const tryLogin = async () =>  {
        try{
            if(!userId||!password){
                alert("아이디 또는 비밀번호를 입력하지 않았습니다.")
            }else{
                // const response = await axios.post("https://noons.herokuapp.com/signin",data)
                const response = await LoginApi.login(userId,password);
                if(response.status===200){
                    alert("로그인을 성공하였습니다.")
                    localStorage.setItem("accessToken",response.data.token)
                }else{
                    alert("로그인을 실패하였습니다.")
                }
            }
        }catch(err){
            alert("에러가 발생했습니다.")
            console.log(err.response.status)
        }
    }


    return(
        <SignIn 
         userId={userId}
         password={password}
         onChangeUserId={onChangeUserId} 
         onChangeUserPw={onChangeUserPw}
         tryLogin={tryLogin}
        />
    )
}

export default SingInContainer;