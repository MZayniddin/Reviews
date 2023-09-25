import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Typography, Grid, Box } from "@mui/material";

import { fetchUserReviews } from "../store/review/review.action";
import {
  selectReviews,
  selectReviewsIsLoading,
} from "../store/review/review.selector";

import ReviewCard from "../components/ReviewCard/ReviewCard";
import Spinner from "../components/Spinner/Spinner";
import CategorySelect from "../components/Select/CategorySelect";
import ProfileSortSelect from "../components/Select/ProfileSortSelect";

const Profile = () => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("");
  const [sortType, setSortType] = useState(-1);

  const handleCategoryChange = (e) => setActiveCategory(e.target.value);

  const handleSortChange = (e) => setSortType(e.target.value);

  useEffect(() => {
    dispatch(fetchUserReviews(activeCategory, sortType));
  }, [activeCategory, sortType]);

  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(selectReviewsIsLoading);

  if (isLoading) return <Spinner />;

  return (
    <Container sx={{ py: 5 }} component="main">
      <Typography mb={6} textAlign="center" variant="h4">
        My Reviews
      </Typography>

      <Box mb={5} display="flex" justifyContent="space-between" gap="10px">
        <CategorySelect
          activeCategory={activeCategory}
          handleCategoryChange={handleCategoryChange}
        />
        <ProfileSortSelect
          sortType={sortType}
          handleSortChange={handleSortChange}
        />
      </Box>

      <Grid container spacing={2}>
        {reviews.length ? (
          reviews.map((review) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={review._id}>
              <ReviewCard review={review} />
            </Grid>
          ))
        ) : (
          <Typography mt={10} textAlign="center" width="100%">
            You don&apos;t have reviews
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Profile;
