import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";

// THEME
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { mainTheme } from "./utils/theme/themeMode";
import { selectThemeMode } from "./store/theme/theme.selector";

import root from "./routes";

const App = () => {
  const themeMode = useSelector(selectThemeMode);

  return (
    <>
      <ThemeProvider theme={mainTheme(themeMode)}>
        <CssBaseline />
        <RouterProvider router={root} />
      </ThemeProvider>
    </>
  );
};

export default App;
