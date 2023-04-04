import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  background-color: #fff;
  border: solid 1px #ddd;
  padding: 8px 16px;
  border-radius: 9999px;
  outline: none;
  &:focus {
    border: solid 1px #40514e;
    box-shadow: 0 0 8px #40514e;
  }
`;
