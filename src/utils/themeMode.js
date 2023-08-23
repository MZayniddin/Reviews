import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  palette: {
    mode: localStorage.getItem("theme") === "dark" ? "dark" : "light",
  },
});
