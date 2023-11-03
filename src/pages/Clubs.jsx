import React from "react";
import styled from "styled-components";
import "../App.css";
import { clubs } from "./data";
import ClubItem from "./ClubItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background-color: #7ebdc2;
`;

const Clubs = () => {
  return (
    <div>
      <h2 className="heading">EXPLORE CLUBS</h2>
      <Container>
        {clubs.map((item) => (
          <ClubItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Clubs;
