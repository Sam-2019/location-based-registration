import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h5> Register </h5>
      <label>First Name</label>
      <input
        {...register("fname", { required: true })}
        placeholder="First Name"
        readOnly
      />

      <label>Last Name</label>
      <input
        {...register("lname", { required: true })}
        placeholder="Last Name"
        readOnly
      />

      <label>Department</label>
      <select {...register("department", { required: true })} readOnly>
        <option value="female">female</option>
      </select>

      <input type="submit" />
    </form>
  );
}
