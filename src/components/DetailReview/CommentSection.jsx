import { useState } from "react";
import { formatDistance, subDays } from "date-fns";
import { Avatar, Box, Paper, Typography, Button } from "@mui/material";
import { randomColor } from "../../utils/randomColor";
import Stars from "../Stars/Stars";
import CommentModal from "../Modal/CommentModal";
import { useSelector } from "react-redux";
import { selectReviewComments } from "../../store/review/review.selector";

const CommentSection = ({ review }) => {
  const comments = useSelector(selectReviewComments);
  const [commentModal, setCommentModal] = useState(false);
  const user = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile")).data
    : null;

  return (
    <Box mt={2}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h4">Comments:</Typography>
        {user && (
          <Button onClick={() => setCommentModal(true)}>Add Comment</Button>
        )}
        <CommentModal
          open={commentModal}
          handleClose={() => setCommentModal(false)}
          reviewId={review._id}
        />
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        {comments.map((c) => (
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
        ))}
      </Box>
    </Box>
  );
};

export default CommentSection;
