import { useMemo } from 'react';
import Label, { LABEL_COLOR_MESSAGE } from './Label';
import Input from './Input';
import styled from 'styled-components';

const TextInput = (props) => {
  const { title, message, required } = props;

  const updatedProps = useMemo(() => {
    const tmp = { ...props };

    ['title', 'message'].forEach((key) => {
      delete tmp[key];
    });

    return tmp;
  }, [props]);

  return (
    <StyledTextInput>
      {title && <Label required={required}>{title}</Label>}

      <Input {...updatedProps} />

      {message && <Label color={LABEL_COLOR_MESSAGE}>{message}</Label>}
    </StyledTextInput>
  );
};

const StyledTextInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

export default TextInput;
