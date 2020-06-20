import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: #a29488;
  flex-direction: column;
  width: 300px;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;

  ${(props) =>
    props.isFocused &&
    css`
      color: #296cff;
      border: 1px solid #296cff;
    `}

  input {
    flex: 1%;
    border: none;
  }

  svg {
    margin-right: 8px;
  }
  span {
    color: #db6148;
    font-size: 0.75em;
  }
`;
