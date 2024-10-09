// src/app/login/page.tsx
"use client";
import { FC, MouseEvent } from "react";

const Login: FC = () => {
  const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/api/auth/login"; // Redirect to SAML login route
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with SAML</button>
    </div>
  );
};

export default Login;
