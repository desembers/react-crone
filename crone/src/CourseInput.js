import React, { useState } from "react";
import { styled } from "styled-compnents";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isVaild, setIsVaild] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //값이 빈스트링인 경우 빨간색으로 해주어야합니다
    if (enteredValue.trim().length === 0) {
      setIsVaild(false);
      setEnteredValue("");
      return; //값을 인력안하기 때문에
    }

    //console.log(enteredValue);
    props.onAddGool(enteredValue);
  };
  console.log(isVaild);
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl>
        <FormControlLabel>목표</FormControlLabel>
        <FormControlInput
          type="text"
          onChange={goalInputChangeHandler}
          inVaild={isVaild}
          //style={{ backgroundColor: "salmon", borderColor: "red" }}
          //style={{ backgroundColor: "transparent", borderColor: "#ccc" }}
          //style={{backgroundColor: isValid? "transport": "red", borderColor: isVaild? "transpport" : "#ccc"}}
        />
      </FormControl>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;

const FormControl = styled.div`
  margin: 0.5rem 0;
`;

const FormControlLabel = styled.label`
  font-weight: bold;
  display: block;
  margnin-bottom: 0.5rem;
`;

const FormControlInput = styled.input`
  dispaly: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  ${(props) =>
    !props.isVaildn && `background-color:salmon; border-color: red;`};
`;
