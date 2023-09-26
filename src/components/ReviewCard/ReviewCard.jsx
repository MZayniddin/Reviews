import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Paper, Typography, Box } from "@mui/material";

import parser from "react-html-parser";

const ReviewCard = ({ review }) => {
  const { title, image, description, _id, creator, name, grade } = review;

  const { t } = useTranslation();
  const renderedDescription = parser(description);

  return (
    <Paper elevation={3} sx={{ overflow: "hidden" }}>
      <Link to={`/review/${_id}`}>
        <img
          className="review-card__img"
          src={
            image ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          alt={title}
        />
        <Box p={2}>
          <Typography variant="h6" mb={1}>
            {title}
          </Typography>
          <Typography
            component="div"
            variant="body2"
            className="review-card__desc-text"
            mb={2}
          >
            {renderedDescription}
          </Typography>
          <Box>
            <Typography variant="body2">
              {creator?.displayName} {t("reviewed")}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {name} {grade}/10
            </Typography>
          </Box>
        </Box>
      </Link>
    </Paper>
  );
};

export default ReviewCard;
