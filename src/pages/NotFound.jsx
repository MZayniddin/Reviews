import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography variant="h2">404</Typography>
        <Typography mb={2} variant="h4">
          {t("page_not_found")}
        </Typography>
        <Button variant="outlined" component={Link} to="/">
          {t("go_to_the_home_page")}
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
