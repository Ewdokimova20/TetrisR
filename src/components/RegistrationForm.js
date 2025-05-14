import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Импортируем хук useNavigate
import styled from "styled-components"; // Импортируем styled-components

// Стили для компонентов
const Container = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;

  &.required:after {
    content: " *"; /* Звездочка для обязательных полей */
    color: red;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
`;

const PasswordStrength = styled.div`
  margin-top: 5px;

  &.weak {
    color: red; /* Красный для слабого пароля */
  }

  &.medium {
    color: orange; /* Оранжевый для среднего пароля */
  }

  &.strong {
    color: green; /* Зеленый для сильного пароля */
  }
`;

const PasswordHint = styled.div`
  font-size: 12px;
  color: #666;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");

  const validate = () => {
    const newErrors = {};
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formValues.username) {
      newErrors.username = "Имя обязательно";
    }

    if (!formValues.email) {
      newErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Некорректный email";
    }

    if (!formValues.password) {
      newErrors.password = "Пароль обязателен";
    } else if (!passwordPattern.test(formValues.password)) {
      newErrors.password =
        "Пароль должен содержать минимум 8 символов, одну заглавную букву, одну строчную букву, одну цифру и один специальный символ";
    }

    if (!formValues.confirmPassword) {
      newErrors.confirmPassword = "Повтор пароля обязателен";
    } else if (formValues.confirmPassword !== formValues.password) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      checkPasswordStrength(value);
    }

    setFormValues({ ...formValues, [name]: value });
  };

  const checkPasswordStrength = (password) => {
    let strength =
      password.length < 8
        ? "Слабый"
        : /(?=.*[A-Z])/.test(password) &&
          /(?=.*[a-z])/.test(password) &&
          /(?=.*\d)/.test(password)
        ? "Средний"
        : /(?=.*[!@#$%^&*])/.test(password)
        ? "Сильный"
        : "";

    setPasswordStrength(strength);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitted values:", formValues);
      alert("Форма успешно отправлена!");
    }
  };

  const navigate = useNavigate(); // Инициализируем navigate

  const handleBack = () => {
    navigate("/"); // Переход обратно на главную страницу
  };

  return (
    <Container>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username" className="required">
            Имя
          </Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            required
          />
          {errors.username && <Error>{errors.username}</Error>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email" className="required">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          {errors.email && <Error>{errors.email}</Error>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password" className="required">
            Пароль
          </Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
          <PasswordHint>
            Пароль должен состоять не менее чем из 8 символов и включать в себя
            по крайней мере одну заглавную букву, одну строчную букву, одну
            цифру и один специальный символ.
          </PasswordHint>
          {errors.password && <Error>{errors.password}</Error>}
          <PasswordStrength className={passwordStrength.toLowerCase()}>
            Сила пароля: {passwordStrength}
          </PasswordStrength>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirmPassword" className="required">
            Повтор пароля
          </Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
        </FormGroup>

        <Button type="submit">Регистрация</Button>
      </form>

      <Button className="buttonOpen" onClick={handleBack}>
        Назад
      </Button>
    </Container>
  );
};

export default RegistrationForm;
