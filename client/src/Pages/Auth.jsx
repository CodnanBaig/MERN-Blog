import React, { useState } from "react";
import { Login } from "../Components/Login";
import { Signup } from "../Components/Signup";

export const Auth = () => {
  const [login, setLogin] = useState(true);

  const toggleAuthMode = () => {
    setLogin(!login);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-primary" onClick={toggleAuthMode}>
            {login ? "Switch to Signup" : "Switch to Login"}
          </button>
        </div>
        {login ? <Login /> : <Signup />}
      </div>
    </div>
  );
};
