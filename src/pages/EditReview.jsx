import { useParams } from "react-router-dom";

import { Container, Typography } from "@mui/material";

import ReviewForm from "../components/Form/ReviewForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchReviews } from "../store/review/review.action";

const EditReview = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);

  const review = useSelector((state) =>
    state.reviews.reviews.find((r) => r._id === id)
  );

  return (
    <Container component="main">
      <Typography variant="h6" my={2}>
        Editing Review
      </Typography>
      <ReviewForm review={review} />
    </Container>
  );
};

export default EditReview;
