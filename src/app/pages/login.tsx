// pages/login.tsx
import { FC, MouseEvent } from "react";

const Login: FC = () => {
  const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/api/auth/login"; // Redirects to SAML login
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with SAML</button>
    </div>
  );
};

export default Login;
