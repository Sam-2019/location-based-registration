import React from "react";
import styled from "styled-components";

const Header = styled.div`
  padding: 10px;
  background: #f0ffff;
  font-size: 25px;
  border-bottom: 1px solid gray;
`;

export default function Dashboard() {
  return (
    <>
      <Header>Dashboard</Header>
    </>
  );
}
