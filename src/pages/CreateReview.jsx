import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";

import ReviewForm from "../components/Form/ReviewForm";

const CreateReview = () => {
  const { t } = useTranslation();

  return (
    <Container component="main">
      <Typography variant="h6" my={2}>
        {t("create_review")}
      </Typography>
      <ReviewForm />
    </Container>
  );
};

export default CreateReview;
