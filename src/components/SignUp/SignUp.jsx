import React from "react";

const SignUp = ({
  userId,
  password,
  name,
  onChangeUserId,
  onChangeUserPw,
  onChangeUserName,
  userIdInput,
  passwordInput,
  nameInput,
}) => {
  return (
    <div>
      <input
        type="text"
        ref={userIdInput}
        placeholder="아이디"
        onChange={e => onChangeUserId(e)}
        value={userId}
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
