import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Typography, Box, Button } from "@mui/material";

import { deleteReview, likeReview } from "../../store/review/review.action";
import { format } from "date-fns";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "../Modal/SimpleModal";

const Detail = ({ review }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile")).data
    : null;

  const [showModal, setShowModal] = useState(false);
  const [likes, setLikes] = useState(review?.likes);
  const hasLikedReview = review?.likes.find((like) => like === user?.email);

  const handleLike = async () => {
    dispatch(likeReview(review._id));
    if (hasLikedReview) {
      setLikes(review.likes.filter((email) => email !== user.email));
    } else {
      setLikes([...review.likes, user.email]);
    }
  };

  const handleDelete = () => {
    dispatch(deleteReview(review._id));
    navigate(-1);
  };

  const Likes = () => {
    if (likes?.length > 0 && user) {
      return likes.find((like) => like === user.email) ? (
        <>
          <FavoriteIcon fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <FavoriteBorderIcon fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
    return (
      <>
        <FavoriteBorderIcon fontSize="small" />
        &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
      </>
    );
  };

  return (
    <>
      <img
        src={
          review.image ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        className="sm:h-[400px] h-[200px] w-full object-cover rounded-md mt-5"
        height={100}
        alt={review.title}
      />
      <Typography variant="h3" mt={2}>
        {review.title}
      </Typography>
      <Box mb={2} display="flex" gap={1}>
        <Typography variant="caption">{review.name}</Typography>
        <Typography variant="body2">
          {review.tags.map((tag) => `#${tag} `)}
        </Typography>
      </Box>
      <Typography mb={2} variant="body1">
        {review.description}
      </Typography>
      <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
        <Box>
          <Typography>Created By: {review.creator.displayName}</Typography>
          <Typography variant="caption">
            {format(new Date(review.created_At), "dd/MM/yyyy HH:mm")}
          </Typography>
        </Box>
        <Box display="flex" gap={1}>
          <Button onClick={handleLike} disabled={!user}>
            <Likes />
          </Button>
          {user && review.creator._id === user._id && (
            <>
              <Button color="error" onClick={() => setShowModal(true)}>
                <DeleteIcon />
              </Button>
              <Modal
                handleClose={() => setShowModal(false)}
                open={showModal}
                onSubmit={handleDelete}
              />
            </>
          )}
        </Box>
      </div>
    </>
  );
};

export default Detail;
