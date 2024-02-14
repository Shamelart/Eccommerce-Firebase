import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div style={{display: 'flex'}}>
      <button
        style={{
          width: "7em",
          height: "2.5em",
          backgroundColor: "white",
          borderRadius: "0.5em",
        }}
      
        onClick={() => loginWithRedirect() }
      >
        Login
      </button>
     
    </div>
  );
}
