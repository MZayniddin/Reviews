import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Paper, Typography, Avatar, Button, FormControl } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import {
  googleAuth,
  facebookAuth,
  userSignUp,
  userSignIn,
} from "../../store/auth/auth.action";

import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Input from "./Input";
import { useTranslation } from "react-i18next";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const switchMode = () => setIsSignUp((prev) => !prev);

  const handleShowPassword = () => setShowPassword((state) => !state);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        await dispatch(googleAuth(tokenResponse?.access_token));

        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const responseFacebook = (response) => {
    try {
      dispatch(facebookAuth(response));
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Something went wrong, Please try again");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) dispatch(userSignUp(formData, navigate));
    else dispatch(userSignIn(formData, navigate));
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        my: 1,
      }}
    >
      <Avatar sx={{ my: 1 }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography mb={3} variant="h6">
        {isSignUp ? t("sign_up") : t("sign_in")}
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
        {isSignUp && (
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            handleChange={handleChange}
          />
        )}
        <FacebookLogin
          appId={import.meta.env.VITE_FACEBOOK_APP_ID}
          callback={responseFacebook}
          fields="name,email,picture"
          render={(renderProps) => (
            <Button
              sx={{ display: "flex", gap: 1 }}
              color="primary"
              variant="contained"
              onClick={renderProps.onClick}
            >
              <FaFacebookF className="text-white text-xl" />
              {t("facebook_sign_in")}
            </Button>
          )}
        />
        <Button
          sx={{ display: "flex", gap: 1 }}
          onClick={googleLogin}
          variant="contained"
          color="primary"
          fullWidth
        >
          <FcGoogle className="text-2xl" />
          {t("google_sign_in")}
        </Button>
        <Button type="submit" fullWidth variant="contained" color="primary">
          {isSignUp ? t("sign_up") : t("sign_in")}
        </Button>
        <Button onClick={switchMode}>
          {isSignUp
            ? t("already_have_an_account?_sign_in")
            : t("dont_have_an_account?_sign_up")}
        </Button>
      </FormControl>
    </Paper>
  );
};

export default AuthForm;
