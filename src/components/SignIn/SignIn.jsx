import React from 'react'

const SignIn = ({
    userId,
    password,
    onChangeUserId,
    onChangeUserPw,
    tryLogin
}) => {
    return(
        <>
        <div>
            <input type="text" name="userId" placeholder="아이디" onChange={(e) => onChangeUserId(e)} value={userId}></input>
        </div>
        <div>
            <input type="password" name="userPw" placeholder="비밀번호" onChange={(e) => onChangeUserPw(e)} value={password}/>
        </div>
        <div onClick={tryLogin}>로그인</div>
        </>
    )
}

export default SignIn;