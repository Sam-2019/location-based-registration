import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}

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

        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      {errors.department && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
