import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: rgb(238, 238, 238);
  border-radius: 12px;
  margin: 0px auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
  max-width: 1200px;
  min-width: 800px;
`;

const StyledInput = styled.input`
  height: 30px;
  border: 0;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  margin-left: 500px;
`;

const FlexDiv = styled.div`
  display: flex;
`;

export { StyledDiv, StyledInput, StyledButton, FlexDiv };
