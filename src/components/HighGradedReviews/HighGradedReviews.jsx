import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography, Grid } from "@mui/material";
import ReviewCard from "../ReviewCard/ReviewCard";

import { fetchHighGradedReviews } from "../../api";

const HighGradedReviews = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await fetchHighGradedReviews();
      setReviews(data);
    };
    fetch();
  }, []);

  return (
    <Box component="section" py={8}>
      <Typography textAlign="center" variant="h4" mb={5}>
        {t("high_graded_reviews")}
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

export default HighGradedReviews;
