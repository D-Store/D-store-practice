import React from 'react'
import './SignIn.css'

const SignIn = ({
    userId,
    password,
    onChangeUserId,
    onChangePassword,
    tryLogin,
    userIdInput,
    passwordInput,
    errorInputUserId,
    errorInputPassword,
    errorTryLogin
}) => {
    return(
        <>
        <div className="MainSignInDiv">
            <div>
                <input 
                type="text" 
                name="userId" 
                placeholder="아이디" 
                ref={userIdInput}
                onChange={(e) => onChangeUserId(e)} 
                value={userId}></input>
            </div>
            <div 
            className="errorMessage"
            name="errorDiv"
            style={{display:"none"}}
            ref={errorInputUserId}
            >
                아이디를 입력해주세요
            </div>
            <div>
                <input 
                type="password" 
                name="userPw" 
                placeholder="비밀번호"
                ref={passwordInput} 
                onChange={(e) => onChangePassword(e)} 
                value={password}/>
            </div>
            <div 
            className="errorMessage" 
            name="errorDiv"
            style={{display:"none"}} 
            ref={errorInputPassword}
            >
                비밀번호를 입력해주세요
            </div>
            <div 
            className="errorMessage"
            name="errorDiv"
            style={{display:"none"}}
            ref={errorTryLogin}
            >
                가입하지 않은 아이디이거나,잘못된 비밀번호입니다.
            </div>
            <div onClick={tryLogin}>로그인</div>
        </div>
        </>
    )
}

export default SignIn;