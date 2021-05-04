import React from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Wrapper } from "./Loader";
import Success from "./Success";
import "./form.css";

const SIGNUP = gql`
  mutation signup(
    $token: String!
    $firstname: String!
    $lastname: String!
    $department: String!
  ) {
    signup(
      token: $token
      firstname: $firstname
      lastname: $lastname
      department: $department
    ) {
      id
      token
      firstname
      lastname
      department
    }
  }
`;

export default function Signup() {
  const [state, setState] = React.useState(true);

  const [
    signup,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(SIGNUP);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const array = new Uint32Array(1);

    const index = window.crypto.getRandomValues(array);
    //console.log(index);

    const userID = {
      token: index[0]
    };

    //console.log(userID.token);

    await localStorage.setItem("sign-up", JSON.stringify(userID));

    setState(false);

    await signup({
      variables: {
        token: String(userID.token),
        firstname: data.firstName,
        lastname: data.lastName,
        department: data.department
        // date: String(Date.now())
      }
    });
  };

  const Form = () => (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5> Signup </h5>
        <label>First Name</label>
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        {errors.fname && <span>This field is required</span>}

        <label>Last Name</label>
        <input
          {...register("lastName", { required: true })}
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
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error :( Please try again</p>}
      </form>
    </Wrapper>
  );

  return <>{state ? <Form /> : <Success />}</>;
}
