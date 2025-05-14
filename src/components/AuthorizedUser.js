// src/components/RegistrationForm.js
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;

  position: relative;
  width: 320px;
  min-width: 320px;
  height: auto;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin: 0 0 10px 0; /* убираем внешние отступы */
`;

const Label = styled.label`
  display: flex;
  flex-decoration: column;
  font-size: 14px;
  margin-button: 8px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #2c2c2c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #1e1e1e;
  }
`;

const ForgotPassword = styled.a`
  align-self: left;
  font-size: 14px;
  color: #0066cc;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #004999;
  }
`;

const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [field, setField] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут добавьте обработку формы
    alert(`Логин: ${login}, Поле: ${field}, Пароль: ${password}`);
  };

  return (
    <FormContainer>
      <Title>Регистрация</Title>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <label>
          Логин
          <InputField
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Введите логин"
            required
          />
        </label>
        <label>
          Поле воода
          <InputField
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
            placeholder="Введите поле"
            required
          />
        </label>
        <label>
          Пароль
          <InputField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
          />
        </label>
        <Button type="submit">Войти</Button>
      </form>
      <ForgotPassword href="#">Забыли пароль?</ForgotPassword>
    </FormContainer>
  );
};

export default RegistrationForm;
