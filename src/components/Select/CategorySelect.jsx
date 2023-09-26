import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { selectReviewCategories } from "../../store/review/review.selector";
import { getCategories } from "../../store/review/review.action";

const CategorySelect = ({ activeCategory, handleCategoryChange }) => {
  const categories = useSelector(selectReviewCategories);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  let isProfilPage = pathname.includes("/profile");

  return (
    <Box sx={{ maxWidth: 200 }} flex={1}>
      <FormControl fullWidth>
        <InputLabel id="category-label">{t("category")}</InputLabel>
        <Select
          onChange={handleCategoryChange}
          labelId="category-label"
          id="category"
          name="category"
          label="Category"
          value={activeCategory}
          required
        >
          {isProfilPage && <MenuItem value="">All</MenuItem>}
          {categories.map((category) => (
            <MenuItem key={category._id} value={category._id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategorySelect;
