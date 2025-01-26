import { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ onLogin }) => {
  const [idInstance, setIdInstance] = useState("");
  const [apiToken, setApiToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idInstance && apiToken) {
      onLogin(idInstance, apiToken);
    } else {
      alert("Введите учетные данные!");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth-form__title">Авторизация</h2>
      <div className="auth-form__field">
        <input
          className="auth-form__input"
          type="text"
          placeholder="idInstance"
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
        />
      </div>
      <div className="auth-form__field">
        <input
          className="auth-form__input"
          type="text"
          placeholder="apiTokenInstance"
          value={apiToken}
          onChange={(e) => setApiToken(e.target.value)}
        />
      </div>
      <button className="auth-form__button" type="submit">
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
