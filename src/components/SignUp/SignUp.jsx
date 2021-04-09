import React from "react";

const SignUp = ({
  Userid,
  password,
  name,
  onChangeUserId,
  onChangeUserPw,
  onChangeUserName,
  passwordInput,
  nameInput,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="아이디"
        onChange={e => onChangeUserId(e)}
        value={Userid}
      />
      <input
        type="text"
        ref={passwordInput}
        placeholder="비밀번호"
        onChange={e => onChangeUserPw(e)}
        value={password}
      />
      <input
        type="text"
        ref={nameInput}
        placeholder="이름"
        onChange={e => onChangeUserName(e)}
        value={name}
      />
    </div>
  );
};

export default SignUp;
