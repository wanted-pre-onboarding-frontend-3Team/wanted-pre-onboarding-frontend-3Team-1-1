import styled from 'styled-components';

export const LABEL_SIZE_SMALL = 'small';
export const LABEL_SIZE_LARGE = 'large';

export const LABEL_COLOR_DEFAULT = 'default';
export const LABEL_COLOR_MESSAGE = 'message';
export const LABEL_COLOR_ERROR = 'error';

const Label = (props) => {
  const { size = LABEL_SIZE_SMALL, color, children, required } = props;

  return (
    <StyledLabel color={color} size={size} required={required}>
      {children}
      {required && <span>*</span>}
    </StyledLabel>
  );
};

const StyledLabel = styled.p`
  color: #585757;

  ${({ size, color, required }) => {
    let css = ``;

    if (required) {
      css += `& span { color: #e92c2c; margin-left: 4px; }`;
    }

    if (size === 'large') {
      css += `font-size: 16px; line-height: 24px;`;
    } else if (size === 'small') {
      css += `font-size: 14px; line-height: 18px;`;
    }

    if (color === 'message') {
      css += `color: #969696;`;
    } else if (color === 'error') {
      css += `color: #e92c2c`;
    }

    return css;
  }}
`;

export default Label;
