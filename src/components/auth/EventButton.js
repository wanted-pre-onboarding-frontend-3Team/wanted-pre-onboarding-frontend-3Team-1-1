import React from 'react';

import styled from 'styled-components';

const EventButton = ({ content, event }) => {
  return (
    <DefaultBtn type="button" onClick={event}>
      {content}
    </DefaultBtn>
  );
};
export const DefaultBtn = styled.button`
  padding: 15px 20px;
  margin-top: 20px;
  background-color: 
  border: none;
  border-radius: 16px;
  :hover {
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);
  }
  :active {
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);
  }
`;
export default React.memo(EventButton);
