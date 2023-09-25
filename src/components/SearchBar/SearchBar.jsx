import { useState } from "react";
import { useTranslation } from "react-i18next";

import { fetchSearchResult } from "../../api";

import {
  InputAdornment,
  TextField,
  Box,
  Typography,
  List,
  ListItem,
  useTheme,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { t } = useTranslation();
  const theme = useTheme();

  const handleChange = async (event) => {
    setSearchTerm(event.target.value);

    if (searchTerm.trim() && searchTerm.length > 0) {
      try {
        const { data } = await fetchSearchResult(event.target.value);
        setSearchResult(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getHightlights = (hightlights) => {
    let hightlightedWords = [];
    for (const i of hightlights) {
      for (const j of i.texts) {
        if (j.type === "hit") hightlightedWords.push(j.value);
      }
    }

    return hightlightedWords;
  };

  return (
    <Box sx={{ maxWidth: 600, width: "80%", position: "relative" }}>
      <TextField
        fullWidth
        id="search"
        type="search"
        label={t("search")}
        value={searchTerm}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment sx={{ cursor: "pointer" }} position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {searchTerm.length > 0 ? (
        <List
          sx={{
            position: "absolute",
            width: "100%",
            height: 250,
            display: "flex",
            gap: 1,
            flexDirection: "column",
            overflowY: "auto",
            background: theme.palette.background.default,
          }}
        >
          {searchResult.map((r) => (
            <ListItem key={r._id}>
              <Box
                sx={{ display: "flex", gap: 1 }}
                to={`/review/${r._id}`}
                component={Link}
              >
                <img
                  width={100}
                  src={
                    r.image ||
                    "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                  }
                  alt={r.title}
                />
                <Box>
                  <Typography>{r.title}</Typography>
                  <Typography variant="caption">{r.name}</Typography>
                  <Typography display="block" variant="caption">
                    {getHightlights(r.hightlight).map((h, idx) => (
                      <mark key={idx}>{h}.. </mark>
                    ))}
                  </Typography>
                  <Typography variant="caption" display="block">
                    {r.tags.map((tag) => `#${tag} `)}
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography
          sx={
            searchTerm.length > 0 && searchResult.length === 0
              ? { display: "block" }
              : { display: "none" }
          }
        >
          No Result
        </Typography>
      )}
    </Box>
  );
};

export default SearchBar;
