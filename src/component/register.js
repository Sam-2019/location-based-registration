import React from "react";
import { useForm } from "react-hook-form";
import Success from "./Success";
import "./form.css";

import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-content: center;
  background-color: blue;
  padding: 0 10px;
  margin: 10px;
`;

const Register = ({ closeRegister }) => {
  const [state, setState] = React.useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    closeRegister();

    setState(false);
  };

  const Form = () => (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5> Register </h5>
        <label>First Name</label>
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />

        <label>Last Name</label>
        <input
          {...register("lastLame", { required: true })}
          placeholder="Last Name"
        />

        <label>Department</label>
        <select {...register("department", { required: true })}>
          <option value="female">female</option>
        </select>

        <input type="submit" />
      </form>
    </>
  );

  return <>{state ? <Form /> : <Success />}</>;
};

export default Register;
