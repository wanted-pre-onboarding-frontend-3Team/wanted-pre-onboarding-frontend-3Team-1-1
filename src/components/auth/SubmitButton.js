import React from 'react';

import { DefaultBtn } from './EventButton';

import styled from 'styled-components';

const formBtn = styled(DefaultBtn)`
  align-self: center;
  width: 100%;
`;

const SubmitButton = ({ text, disabled }) => {
  return (
    <button type="submit" name="submitBtn" disabled={disabled}>
      {text}
    </button>
  );
};

export default React.memo(SubmitButton);
