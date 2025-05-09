//import logo from "./logo.svg";
import "./CourseInput.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label id="label">목표</label>
        <br></br>
        <input id="goal" text="type" name="goal" />
        <br></br>
        <div className="buttontype">
          <button class="add" type="button">
            목표추가하기
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
