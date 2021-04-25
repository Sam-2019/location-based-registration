import React from "react";
import { useForm } from "react-hook-form";
import { Wrapper } from "./Loader";
import Success from "./Success";
import "./form.css";

export default function Signup() {
  const [state, setState] = React.useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const array = new Uint32Array(1);
    const index = window.crypto.getRandomValues(array);

    const userID = {
      token: index[0]
    };

    await localStorage.setItem("sign-up", JSON.stringify(userID));

    setState(false);
  };

  const Form = () => (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </Wrapper>
  );

  return <>{state ? <Form /> : <Success />}</>;
}
