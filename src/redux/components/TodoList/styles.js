import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  max-width: 1200px;
  min-width: 800px;
  justify-content: center;
  margin: 0 auto;
`;

const StyledTodoListHeader = styled.h3`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const StyledTodoListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { StyledDiv, StyledTodoListHeader, StyledTodoListBox };
