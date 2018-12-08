import React from 'react';
import styled from 'styled-components';

const Stylediv = styled.div`
  display: grid;
  grid-row: 3/4;
  grid-column: 1/-1;
  justify-content: center;
`;

export default function YouWonLose(props) {
  return (
    <Stylediv>
      <h2>{props.text}</h2>
      {props.children}
    </Stylediv>
  );
}