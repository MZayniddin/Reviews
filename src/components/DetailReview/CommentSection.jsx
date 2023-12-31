import { useState } from "react";
import { useSelector } from "react-redux";
import { formatDistance } from "date-fns";
import { randomColor } from "../../utils/randomColor";

import { Avatar, Box, Paper, Typography, Button } from "@mui/material";
import { selectReviewComments } from "../../store/review/review.selector";

import Stars from "../Stars/Stars";
import CommentModal from "../Modal/CommentModal";
import { useTranslation } from "react-i18next";

const CommentSection = ({ review }) => {
  const { t } = useTranslation();
  const comments = useSelector(selectReviewComments);
  const [commentModal, setCommentModal] = useState(false);
  const user = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile")).data
    : null;

  const hasCommented = comments.find((comment) => comment.user === user?.email);

  return (
    <Box mt={2}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{t("comments")}</Typography>
        {user && (
          <Button onClick={() => setCommentModal(true)}>
            {hasCommented ? t("my_comment") : t("add_comment")}
          </Button>
        )}
        <CommentModal
          open={commentModal}
          hasCommented={hasCommented}
          handleClose={() => setCommentModal(false)}
          reviewId={review._id}
        />
      </Box>
      <Box display="flex" flexDirection="column" gap={2} py={2}>
        {comments.length ? (
          comments.map((c) => (
            <Paper key={c._id} style={{ padding: "10px" }}>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Avatar style={{ background: randomColor(c._id) }}>
                  {c.user.charAt(0)}
                </Avatar>
                <Typography variant="body1">{c.user}</Typography>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={1}
              >
                <Stars rate={c.rate} />
                <Typography variant="caption">
                  {formatDistance(new Date(c.date), new Date(), {
                    addSuffix: true,
                  })}
                </Typography>
              </Box>
              <Typography variant="body1">{c.text}</Typography>
            </Paper>
          ))
        ) : (
          <Typography>{t("no_comments_yet")}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default CommentSection;
