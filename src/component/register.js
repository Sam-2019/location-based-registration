import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { REGISTERR } from "../graphqlFunctions";
import { RegisterWrapper } from "../styledComponents";
import Success from "./Success";

import "./form.css";

const Register = ({ closeRegister }) => {
  const [state, setState] = React.useState(true);

  const [registerNow] = useMutation(REGISTERR);

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
    <RegisterWrapper>
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
    </RegisterWrapper>
  );

  return <>{state ? <Form /> : <Success />}</>;
};

export default Register;
