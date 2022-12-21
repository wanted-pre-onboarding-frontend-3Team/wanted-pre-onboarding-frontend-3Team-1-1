import React from 'react';

import styled from 'styled-components';

const SubmitButton = ({ text }) => {
  return <button type="submit">{text}</button>;
};
export default React.memo(SubmitButton);
