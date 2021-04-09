import React from "react";

const SignUp = ({
  userId,
  password,
  name,
  GenderId,
  onChangeUserId,
  onChangeUserPw,
  onChangeUserName,
  onChangeUserGenderId,
  userIdInput,
  passwordInput,
  nameInput,
  genderIdInput,
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
      <input
        type="text"
        placeholder="성별(1,2)"
        ref={genderIdInput}
        onChange={e => onChangeUserGenderId(e)}
        value={GenderId}
      />
    </div>
  );
};

export default SignUp;
