import { Box, Grid, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { selectReviews } from "../../store/review/review.selector";
import ReviewCard from "../review-card/ReviewCard";

const RecentReviews = () => {
  let reviews = useSelector(selectReviews);

  if (reviews.length > 8) reviews = reviews.slice(0, 8);

  return (
    <Box component="section" py={4}>
      <Typography variant="h4" textAlign="center" mb={5}>
        Recent Reviews
      </Typography>
      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={review._id}>
            <ReviewCard review={review} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecentReviews;
