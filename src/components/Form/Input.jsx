import { IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Input = ({
  name,
  label,
  handleChange,
  autoFocus,
  type,
  handleShowPassword,
  multiline
}) => {
  return (
    <TextField
      name={name}
      label={label}
      onChange={handleChange}
      autoFocus={autoFocus}
      multiline={multiline}
      type={type}
      autoComplete="current-password"
      variant="outlined"
      required
      InputProps={
        name === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  );
};

export default Input;
