import React from "react";
import FormField from "../formField/FormField";
import { Button, WrapperForm } from "./FormContact.styles";

import { useForm } from "react-hook-form";
const ref = React.createRef();

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (data) => {
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    alert(`Is this your name and email: ${result.data}`);
  };

  return (
    <WrapperForm onSubmit={handleSubmit(handleSubmitForm)}>
      <FormField
        ref={ref}
        name="name"
        placeholder="Name"
        {...register("name", { required: true, minLength: 2, maxLength: 40 })}
      />
      {errors.name && "Name is required"}
      <FormField
        ref={ref}
        name="email"
        type="email"
        placeholder="Email"
        {...register("email", {
          required: true,
          minLength: 7,
          pattern: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i",
        })}
      />
      {errors.email && "Email is required"}
      <Button type="submit">Send</Button>
    </WrapperForm>
  );
};

export default FormContact;
