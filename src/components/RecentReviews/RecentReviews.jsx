import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Box, Grid, Typography } from "@mui/material";
import ReviewCard from "../ReviewCard/ReviewCard";

import { selectReviews } from "../../store/review/review.selector";

const RecentReviews = () => {
  const { t } = useTranslation();
  let reviews = useSelector(selectReviews);

  if (reviews.length > 8) reviews = reviews.slice(0, 8);

  return (
    <Box component="section" py={2} mt={3}>
      <Typography variant="h4" textAlign="center" mb={5}>
        {t("recent_reviews")}
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
