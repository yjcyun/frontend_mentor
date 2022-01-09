import { useState } from "react";
import styled from "styled-components";
import { DatePicker } from "./DatePicker";

import { Input } from "./Input";

const StyledForm = styled.form`
  background: var(--white);
  padding: 48px;
`;

export const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errorMsg = "This field is required";

    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!name) {
      nameError = errorMsg;
    }

    if (!email) {
      emailError = errorMsg;
    } else if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      emailError = "Please use a valid email address";
    }

    if (!message) {
      messageError = errorMsg;
    }

    if (nameError || emailError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });

      return false;
    }

    return true;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validate();

    if (isValid) {
      setErrors({ name: "", email: "", message: "" });
      setName("");
      setEmail("");
      setMessage("");
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <Input
        error={errors.name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        value={name}
      />
      <Input
        error={errors.email}
        onChange={(e) => setName(e.target.value)}
        placeholder="Email"
        value={email}
      />
      <DatePicker />
    </StyledForm>
  );
};
