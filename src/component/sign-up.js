import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { Wrapper } from "../styledComponents";
import { SIGNUP } from "../graphqlFunctions";
import { MapButton } from "../constants/helper";
import Success from "./Success";

export default function Signup() {
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

    const userID = {
      token: index[0]
    };

    await localStorage.setItem("signupTOKEN", JSON.stringify(userID));

    await signup({
      variables: {
        token: String(userID.token),
        firstname: firstName,
        lastname: lastName,
        department: department
      }
    });

    await show();
  };

  function show() {
    if (loading === false) {
      setState(false);
    }
  }

  const Form = () => (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5> Signup </h5>

        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        {errors.firstName && (
          <span className="error">This field is required</span>
        )}

        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        {errors.lastName && (
          <span className="error">This field is required</span>
        )}

        <label>Department</label>
        <select {...register("department", { required: true })}>
          <option selected disabled>
            Choose Department
          </option>
          <option value="Car Park">Car Park</option>
          <option value="Accounts">Accounts</option>
          <option value="Supply Chain">Supply Chain</option>
          <option value="Other">Other</option>
        </select>
        {errors.department && (
          <span className="error">This field is required</span>
        )}

        <MapButton
          id={loading ? "disable-submit" : "submit"}
          loading={loading}
          value="Submit"
        />
      </form>
    </Wrapper>
  );

  return <>{state ? <Form /> : <Success data={data} loading={loading} />}</>;
}
