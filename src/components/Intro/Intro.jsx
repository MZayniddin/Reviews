import { Typography } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <section className="py-[120px] md:py-[150px] flex flex-col justify-center items-center text-center">
      <Typography variant="h1" fontSize={{ xs: 30, sm: 48, md: 60 }} mb={2}>
        {t("intro_slogan")}
      </Typography>
      <Typography variant="body2" mb={3}>
        {t("intro_motto")}
      </Typography>
      <SearchBar />
    </section>
  );
};

export default Intro;
