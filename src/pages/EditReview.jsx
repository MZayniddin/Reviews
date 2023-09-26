import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, Typography } from "@mui/material";
import ReviewForm from "../components/Form/ReviewForm";

const EditReview = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const review = useSelector((state) =>
    state.reviews.reviews.find((r) => r._id === id)
  );

  return (
    <Container component="main">
      <Typography variant="h6" my={2}>
        {t("editing_review")}
      </Typography>
      <ReviewForm review={review} />
    </Container>
  );
};

export default EditReview;
