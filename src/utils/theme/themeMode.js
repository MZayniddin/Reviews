import { createTheme } from "@mui/material";

export const mainTheme = (themeMode) =>
  createTheme({
    palette: {
      mode: themeMode,
    },
  });
