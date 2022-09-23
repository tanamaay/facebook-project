import { Button } from "@mui/material";
import React from "react";

import "./Login.css";
function Login() {
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" />
        <img src="https://www.aludesign.pl/wp-content/uploads/2021/07/Facebook-Logo.png"/>
      </div>
      <Button type="submit">

        Sign In
      </Button>
    </div>
  );
}

export default Login;
