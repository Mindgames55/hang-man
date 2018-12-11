import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  text-transform: uppercase;
`;

export default function Button(props) {
  function handleClick(){
    props.handleClick();
  }

  return (
    <StyledButton disabled={props.disabled} onClick={handleClick}>
      {props.name}
    </StyledButton>
  );
}
