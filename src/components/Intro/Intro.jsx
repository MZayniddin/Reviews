import { Box, Typography } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <Box
      component="section"
      sx={{
        py: { xs: "120px", md: "150px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" fontSize={{ xs: 30, sm: 48, md: 60 }} mb={2}>
        {t("intro_slogan")}
      </Typography>
      <Typography variant="body2" mb={3}>
        {t("intro_motto")}
      </Typography>
      <SearchBar />
    </Box>
  );
};

export default Intro;
