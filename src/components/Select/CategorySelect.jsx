import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { selectReviewCategories } from "../../store/review/review.selector";
import { getCategories } from "../../store/review/review.action";


const CategorySelect = ({ activeCategory, handleCategoryChange }) => {
  const categories = useSelector(selectReviewCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Box sx={{ maxWidth: 200 }} flex={1}>
      <FormControl fullWidth>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          onChange={handleCategoryChange}
          labelId="category-label"
          id="category"
          name="category"
          label="Category"
          value={activeCategory}
          required
        >
          <MenuItem value="all">All</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category._id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategorySelect;
