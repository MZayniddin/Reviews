import { Container, Typography } from "@mui/material";

import ReviewForm from "../components/Form/ReviewForm";

const CreateReview = () => {
  return (
    <Container component="main">
      <Typography variant="h6" my={2}>
        Create Review
      </Typography>
      <ReviewForm />
    </Container>
  );
};

export default CreateReview;
