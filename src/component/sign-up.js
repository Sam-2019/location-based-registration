import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { Wrapper } from "../styledComponents";
import Success from "./Success";
import "./form.css";
import { SIGNUP } from "../qraphqlFunctions";

export default function Signup() {
  let history = useHistory();
  const [state, setState] = React.useState(true);

  const [signup, { data, loading }] = useMutation(SIGNUP);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async ({ firstName, lastName, department }) => {
    const array = new Uint32Array(1);

    const index = window.crypto.getRandomValues(array);
    //console.log(index);

    const userID = {
      token: index[0]
    };

    //console.log(userID.token);

    await localStorage.setItem("signupTOKEN", JSON.stringify(userID));

    await signup({
      variables: {
        token: String(userID.token),
        firstname: firstName,
        lastname: lastName,
        department: department
        // date: String(Date.now())
      }
    });

    // await saveID();

    await setState(false);

    show();
  };

  function show() {
    console.log(loading);
    // if (!loading) {
    //   history.push("/");
    // }
  }

  const Form = () => (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5> Signup </h5>
        <label>First Name</label>
        <input {...register("firstName", { required: true })} />
        {errors.fname && <span>This field is required</span>}

        <label>Last Name</label>
        <input {...register("lastName", { required: true })} />
        {errors.lname && <span>This field is required</span>}

        <label>Department</label>
        <select {...register("department", { required: true })}>
          <option selected disabled></option>
          <option value="Car Park">Car Park</option>
          <option value="Accounts">Accounts</option>
          <option value="Supply Chain">Supply Chain</option>
          <option value="Other">Other</option>
        </select>
        {errors.department && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </Wrapper>
  );

  return <>{state ? <Form /> : <Success data={data} />}</>;
}
