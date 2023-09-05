import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Typography,
  Grid,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

import { fetchUserReviews, getCategories } from "../store/review/review.action";
import {
  selectReviewCategories,
  selectReviews,
} from "../store/review/review.selector";

import UserReviews from "../components/user-reviews/UserReviews";
import ReviewCard from "../components/review-card/ReviewCard";

const Profile = () => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("");

  const categories = useSelector(selectReviewCategories);

  const handleCategoryChange = (e) => setActiveCategory(e.target.value);

  useEffect(() => {
    dispatch(fetchUserReviews(activeCategory === "all" ? "" : activeCategory));
  }, [activeCategory]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const reviews = useSelector(selectReviews);

  return (
    <Container sx={{ py: 5 }} component="main">
      <Typography mb={6} textAlign="center" variant="h4">
        My Reviews
      </Typography>
      {/* <UserReviews /> */}
      <Box mb={5}>
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

      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={review._id}>
            <ReviewCard review={review} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Profile;
