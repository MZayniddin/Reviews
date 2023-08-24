import { useState } from "react";
import { useTranslation } from "react-i18next";

import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(searchTerm);
  const { t } = useTranslation();

  return (
    <TextField
      id="search"
      type="search"
      label={t("search")}
      value={searchTerm}
      onChange={handleChange}
      sx={{ maxWidth: 600, width: "80%" }}
      InputProps={{
        endAdornment: (
          <InputAdornment sx={{ cursor: "pointer" }} position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
