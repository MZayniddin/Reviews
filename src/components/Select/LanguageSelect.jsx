import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const [activeLang, setActiveLang] = useState(localStorage.getItem("lang"));
  const langs = ["en", "uz"];

  const changeLang = (e) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value || "en");
    setActiveLang(localStorage.getItem("lang"));
  };

  return (
    <div>
      <Select
        size="small"
        value={activeLang}
        onChange={changeLang}
        sx={{ textTransform: "uppercase" }}
      >
        {langs.map((lang, index) => (
          <MenuItem
            sx={{ textTransform: "uppercase" }}
            key={index}
            value={lang}
          >
            {lang}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default LanguageSelect;
