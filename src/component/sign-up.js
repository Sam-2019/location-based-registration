import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./form.css";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  const onSubmit = async (data) => {
    const array = new Uint32Array(1);
    const index = window.crypto.getRandomValues(array);

    const userID = {
      token: index[0]
    };

    await localStorage.setItem("sign-up", JSON.stringify(userID));
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <h5> Signup </h5>
      <label>First Name</label>
      <input
        {...register("fname", { required: true })}
        placeholder="First Name"
      />
      {errors.fname && <span>This field is required</span>}

      <label>Last Name</label>
      <input
        {...register("lname", { required: true })}
        placeholder="Last Name"
      />
      {errors.lname && <span>This field is required</span>}

      <label>Department</label>
      <select {...register("department", { required: true })}>
        <option selected disabled></option>

        <option value="Accounts">Accounts</option>
        <option value="Supply Chain">Supply Chain</option>
        <option value="Other">Other</option>
      </select>
      {errors.department && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
