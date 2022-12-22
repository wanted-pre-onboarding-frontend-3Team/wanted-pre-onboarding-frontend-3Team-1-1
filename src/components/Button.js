import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BUTTON_SIZE_LARGE = 'large';
export const BUTTON_SIZE_MEDIUM = 'medium';
export const BUTTON_SIZE_SMALL = 'small';

export const BUTTON_COLOR_BLUE = 'blue';
export const BUTTON_COLOR_WHITE = 'white';

const Button = (props) => {
  const { size = BUTTON_SIZE_MEDIUM, color = BUTTON_COLOR_BLUE, to } = props;

  const updatedProps = useMemo(() => {
    const tmp = { ...props };

    ['size', 'color'].forEach((key) => {
      delete tmp[key];
    });

    return tmp;
  }, [props]);

  const tag = useMemo(() => {
    let component = 'button';

    if (to) {
      component = Link;
    }

    return component;
  }, [to]);

  return <StyledButton as={tag} size={size} color={color} {...updatedProps} />;
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  white-space: nowrap;
  transition: 200ms;

  &:disabled {
    opacity: 0.5;
  }

  ${({ size, color, required }) => {
    let css = ``;

    if (required) {
      css += `& span { color: #e92c2c; margin-left: 4px; }`;
    }

    if (color === 'blue') {
      css += `color: #ffffff; background-color: #0085ff; 
              box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08);
              &:hover { background-color: #339dff; }`;
    } else if (color === 'white') {
      css += `color: #1c1c1c; border: 1px solid #e8e8e8;
              background-color: #ffffff; 
              box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06);
              &:hover { background-color: #f7f7f7; }`;
    } else if (color === 'red') {
      css += `color: #ffffff; background-color: #e92c2c; 
              box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08);
              &:hover { background-color: #ED5556; }`;
    }

    if (size === 'large') {
      css += `font-size: 20px; line-height: 28px; height: 52px; padding: 0 16px;`;
    } else if (size === 'medium') {
      css += `font-size: 16px; line-height: 24px; height: 40px; padding: 0 12px;`;
    } else if (size === 'small') {
      css += `font-size: 13px; line-height: 20px; height: 28px; padding: 0 8px;`;
    }

    return css;
  }}
`;

export default Button;
