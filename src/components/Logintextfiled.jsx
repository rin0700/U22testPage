// src/components/LoginTextField.js
import React from 'react';
import "../style/logintextfiledStyle.css";

const LoginTextField = () => {
  return (
    <div className="login-container">
      <div>
        <label htmlFor="userId">ユーザーID:</label>
        <input type="text" id="userId" name="userId" />
      </div>
      <div>
        <label htmlFor="password">パスワード:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="button-container">
        <button type="button">ログイン</button>
        <button type="button" className="register-button"><p1>新規登録</p1></button>
      </div>
    </div>
  );
}

export default LoginTextField;
