import React, { useState } from "react";
import LabledInput from "../common/LabledInput";
import HeightBox from "../common/HeightBox";
import { StyledButton } from "./styles";
import { FlexDiv } from "./styles";
import RightMarginBox from "../common/RightMarginBox";
import "./styles";
import { StyledDiv } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../modules/todos";

function Input() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const getErrorMsg = (errorCode, params) => {
    // ...
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();

    if (!title || !contents) {
      return getErrorMsg("01", { title, contents });
    }

    const validationArr = todos.filter(
      (item) => item.title === title && item.contents === contents
    );

    if (validationArr.length > 0) {
      return getErrorMsg("02", { title, contents });
    }

    const newTodo = {
      title,
      contents,
      isDone: false,
      id: uuidv4(),
    };

    dispatch(addTodo(newTodo));

    setTitle("");
    setContents("");
  };

  return (
    <StyledDiv>
      <form onSubmit={handleSubmitButtonClick}>
        <FlexDiv>
          <LabledInput
            id="title"
            label="제목"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={handleTitleChange}
          />
          <HeightBox width={10} />
          <LabledInput
            id="contents"
            label="내용"
            placeholder="내용을 입력해주세요."
            value={contents}
            onChange={handleContentsChange}
          />
          <RightMarginBox>
            <StyledButton type="submit">추가하기</StyledButton>
          </RightMarginBox>
        </FlexDiv>
      </form>
    </StyledDiv>
  );
}

export default Input;
