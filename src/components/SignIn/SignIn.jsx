import React from 'react'
import './SignIn.css'

const SignIn = ({
    userId,
    password,
    onChangeUserId,
    onChangeUserPw,
    tryLogin,
    passwordInput,
    errorInput
}) => {
    return(
        <>
        <div className="MainSignInDiv">
            <div>
                <input 
                type="text" 
                name="userId" 
                placeholder="아이디" 
                onChange={(e) => onChangeUserId(e)} 
                value={userId}></input>
            </div>
            <div 
            className="errorInput" 
            style={{display:"none"}}
            ref={errorInput}
            >
                아이디를 입력해주세요
            </div>
            <div>
                <input 
                type="password" 
                name="userPw" 
                placeholder="비밀번호"
                ref={passwordInput} 
                onChange={(e) => onChangeUserPw(e)} 
                value={password}/>
            </div>
            <div onClick={tryLogin}>로그인</div>
        </div>
        </>
    )
}

export default SignIn;