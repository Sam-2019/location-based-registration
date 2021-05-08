import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-content: center;
`;

export const RegisterWrapper = styled.div`
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

export const Load = styled.div`
  margin: auto;
  color: #000000;
  text-align: center;
`;

export const SuccessItem = styled.div`
  margin: auto;
  color: #000000;
  text-align: center;
`;

export const PopupWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 60%;
  transition: all ease 0.7s;
  z-index: 11;
  animation-name: fade-in;
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  display: flex;
  align-content: center;
  background-color: #ffffff;
  border-radius: 30px 30px 0 0;
`;

export const Popup = styled.div`
  margin: auto;
  transition: all 0.6s ease-in-out;
  max-width: 400px;
  text-align: center;
  border: 1px solid red;
`;
