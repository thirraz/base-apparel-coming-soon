import "./Input.css";
import { useState } from "react";
import arrowIcon from "../images/icon-arrow.svg";

export const Input = ({ type }) => {
  const [form, setForm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.match(/[0-9]/g)) {
      console.log("Não é possível colocar números!");
      setError((s) => !s);
      setError("error");
    }

    if (form == "") {
      console.log("Input vazio");
    }
  };
  return (
    <div className="inputContainer">
      <form onSubmit={handleSubmit}>
        <input
          className={error}
          type="text"
          placeholder="Email Address"
          onChange={(e) => setForm(e.target.value)}
        />
        {/* {error ? (type = "error") : (type = "")} */}
        <button>
          <img src={arrowIcon} />
        </button>
      </form>

      {error ? (
        <p className="errorMessage">Please provide a valid email</p>
      ) : null}
    </div>
  );
};
