import React from "react";
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
      <div className="form-control invalid">
        <label>목표</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          //style={{ backgroundColor: "salmon", borderColor: "red" }}
          style={{ backgroundColor: "transparent", borderColor: "#ccc" }}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
