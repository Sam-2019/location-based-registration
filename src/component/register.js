import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";

export default function App() {
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
      <input
        {...register("example", { required: true })}
        placeholder="First Name"
      />

      <input
        {...register("exampleRequired", { required: true })}
        placeholder="Last Name"
      />

      <select {...register("gender", { required: true })}>
        <option selected disabled>
          Choose Department
        </option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

      <input type="submit" />
    </form>
  );
}
