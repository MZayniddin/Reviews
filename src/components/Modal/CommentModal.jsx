import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import {
  Modal,
  Box,
  Typography,
  Button,
  Rating,
  TextField,
} from "@mui/material";

import { commentReview } from "../../store/review/review.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CommentModal = ({ open, handleClose, reviewId, hasCommented }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [rating, setRating] = useState(hasCommented ? hasCommented.rate : 0);
  const [comment, setComment] = useState(hasCommented ? hasCommented.text : "");

  const handleComment = (e) => setComment(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = { rate: rating, text: comment };
    dispatch(commentReview(newComment, reviewId));

    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-add-comment"
      aria-describedby="modal-modal-add-comment"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-rate-this-review"
          variant="h6"
          component="h2"
        >
          {hasCommented ? t("change_comment") : t("rate_this_review")}
        </Typography>
        <Box
          onSubmit={handleSubmit}
          component="form"
          mt={1}
          autoComplete="off"
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Rating
            precision={0.5}
            value={rating}
            required
            onChange={(e, newValue) => {
              setRating(newValue);
            }}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label={t("comment")}
            value={comment}
            required
            onChange={handleComment}
          />

          <Box display="flex" gap={1}>
            <Button onClick={handleClose}>{t("cancel")}</Button>
            <Button
              variant="outlined"
              color="success"
              type="submit"
              disabled={!rating}
            >
              {t("submit")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CommentModal;
