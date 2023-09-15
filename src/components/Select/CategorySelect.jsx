import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { useSelector } from "react-redux";
import { selectReviewCategories } from "../../store/review/review.selector";

const CategorySelect = ({ activeCategory, handleCategoryChange }) => {
  const categories = useSelector(selectReviewCategories);

  return (
    <Box sx={{ maxWidth: 200 }} flex={1}>
      <FormControl fullWidth>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          onChange={handleCategoryChange}
          labelId="category-label"
          id="category"
          label="Category"
          value={activeCategory}
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
