import { useState } from "react";

import { Paper, Typography, Avatar, Button, FormControl } from "@mui/material";

import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Input from "./Input";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const switchMode = () => setIsSignUp((prev) => !prev);

  const handleShowPassword = () => setShowPassword((state) => !state);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // dispatch(auth(tokenResponse?.access_token));
        // navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const responseFacebook = (response) => {
    console.log(response);
  };

  const handleChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        mt: 8,
      }}
    >
      <Avatar sx={{ my: 1 }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography mb={3} variant="h6">
        Sign {isSignUp ? "Up" : "In"}
      </Typography>
      <FormControl
        component="form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        fullWidth
        sx={{ display: "flex", gap: 2 }}
      >
        {isSignUp && (
          <Input
            label="Display Name"
            type="text"
            name="displayName"
            autoFocus={true}
            handleChange={handleChange}
          />
        )}
        <Input
          label="Email"
          type="email"
          handleChange={handleChange}
          name="email"
        />
        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          handleChange={handleChange}
          handleShowPassword={handleShowPassword}
        />
        {/* <GoogleLogin /> */}
        <FacebookLogin
          appId="1485872782182119"
          callback={responseFacebook}
          autoLoad={true}
          render={(renderProps) => (
            <Button
              sx={{ display: "flex", gap: 1 }}
              color="primary"
              variant="contained"
              onClick={renderProps.onClick}
            >
              <FaFacebookF className="text-white text-xl" />
              Facebook Sign In
            </Button>
          )}
        />
        <Button
          sx={{ display: "flex", gap: 1 }}
          onClick={login}
          variant="contained"
          color="primary"
          fullWidth
        >
          <FcGoogle className="text-2xl" />
          Google Sign In
        </Button>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign {isSignUp ? "Up" : "In"}
        </Button>
        <Button onClick={switchMode}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Button>
      </FormControl>
    </Paper>
  );
};

export default AuthForm;