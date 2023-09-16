import { useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, Box, Button } from "@mui/material";

import { likeReview } from "../../store/review/review.action";
import { formatRelative, subDays } from "date-fns";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Detail = ({ review }) => {
  const dispatch = useDispatch();
  const user = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile")).data
    : null;

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
        &nbsp;Like
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
      <Typography>Created By: {review.creator.displayName}</Typography>
      <Typography variant="caption">
        {formatRelative(
          subDays(new Date(review.created_At), 3),
          new Date(review.created_At)
        )}
      </Typography>
      <Button onClick={handleLike} disabled={!user}>
        <Likes />
      </Button>
    </>
  );
};

export default Detail;
