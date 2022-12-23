import styled from 'styled-components';

const List = (props) => {
  const { items, onRender } = props;

  return (
    <StyledList>
      {items.map((item) => {
        return onRender(item);
      })}
    </StyledList>
  );
};

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

export default List;
