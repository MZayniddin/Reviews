import { Container } from "@mui/material";
import AuthForm from "../components/Form/AuthForm";

const Auth = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <AuthForm />
    </Container>
  );
};

export default Auth;
