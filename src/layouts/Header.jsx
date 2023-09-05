import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import decode from "jwt-decode";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import ThemeSwitcher from "../components/Switch/ThemeSwitcher";
import LanguageSelect from "../components/Select/LanguageSelect";

import { toggleTheme } from "../store/theme/theme.action";

// LOGO
import logo from "../assets/logo/logo.svg";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["profile", "logout"];

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [user, setUser] = useState(localStorage.getItem("profile") || null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [themeChecked, setThemeChecked] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleChangeTheme = (e) => {
    dispatch(toggleTheme(e.target.checked));
    setThemeChecked((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch({ type: "auth/LOGOUT" });
    setUser(null);
  };

  const handleUserMenu = (e) => {
    if (e.target.dataset.name === "logout") handleLogout();
    if (e.target.dataset.name === "profile") navigate("/profile");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      try {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
      } catch (error) {
        console.log(error);
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [user?.token, location]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: { xs: "flex" }, justifyContent: "space-between" }}
        >
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography noWrap component={Link} to="/">
            <img width={130} src={logo} alt="Reviews Logo" />
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ThemeSwitcher
              onChange={handleChangeTheme}
              checked={themeChecked}
            />
            <LanguageSelect />

            {user ? (
              <Tooltip title={t("open_settings")}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user?.data?.picture} />
                </IconButton>
              </Tooltip>
            ) : (
              <Button sx={{ color: "white" }} component={Link} to="/auth">
                Sign in
              </Button>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    onClick={handleUserMenu}
                    data-name={setting}
                    textAlign="center"
                  >
                    {t(setting)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
