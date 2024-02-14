import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Logout() {
  const { logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <button
        onClick={() => logout()}
        style={{
          width: "7em",
          height: "2.5em",
          backgroundColor: "smoke",
          borderRadius: "0.5em",
        }}
      >
        Logout
      </button>
      {isAuthenticated && (
        <Stack direction="row" spacing={2} sx={{ paddingLeft: "1em" }}>
          <Avatar alt="Remy Sharp" src={user.picture} />
        </Stack>
      )}
    </>
  );
}
