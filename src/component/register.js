import React from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
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
  background-color: white;
  padding: 0 10px;
  margin: 5px;
  z-index: 20;
`;

const REGISTER = gql`
  mutation register(
    $firstname: String!
    $lastname: String!
    $department: String!
    $date: String!
  ) {
    register(
      firstname: $firstname
      lastname: $lastname
      department: $department
      date: $date
    ) {
      id
      firstname
      lastname
      department
      date
    }
  }
`;

const Register = ({ closeRegister }) => {
  const [state, setState] = React.useState(true);

  const [registerNow] = useMutation(REGISTER);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    closeRegister();

    setState(false);

    await registerNow({
      variables: {
        firstname: data.fName,
        lastname: data.lName,
        department: data.deptmnt,
        date: String(Date.now())
      }
    });
  };

  const Form = () => (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5> Register </h5>
        <label>First Name</label>
        <input
          {...register("fName", { required: true })}
          placeholder="First Name"
        />

        <label>Last Name</label>
        <input
          {...register("lName", { required: true })}
          placeholder="Last Name"
        />

        <label>Department</label>
        <select {...register("deptmnt", { required: true })}>
          <option value="female">female</option>
        </select>

        <div>{Date.now()}</div>

        <button onClick={handleSubmit(onSubmit)}>Submit</button>

        <button onClick={closeRegister}>Cancel</button>
      </form>
    </Wrapper>
  );

  return <>{state ? <Form /> : <Success />}</>;
};

export default Register;
