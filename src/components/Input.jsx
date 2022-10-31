import "./Input.css";
import { useState } from "react";
import arrowIcon from "../images/icon-arrow.svg";

export const Input = ({ type }) => {
  const [form, setForm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      console.log("Valid Form!");
    } else if (form == "") {
      console.log("Input vazio");
    } else {
      setError((s) => !s);
      setError("error");
    }

    setForm("");
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
        <button>
          <img src={arrowIcon} />
        </button>

        {error ? (
          <p className="errorMessage">Please provide a valid email!</p>
        ) : null}
      </form>
    </div>
  );
};
