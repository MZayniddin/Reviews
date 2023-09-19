import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchOneReview } from "../store/review/review.action";

import {
  selectReviewsIsLoading,
  selectSingleReview,
} from "../store/review/review.selector";

import Spinner from "../components/Spinner/Spinner";
import Detail from "../components/DetailReview/Detail";
import CommentSection from "../components/DetailReview/CommentSection";

const DetailReview = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const review = useSelector(selectSingleReview);
  const isLoading = useSelector(selectReviewsIsLoading);

  useEffect(() => {
    dispatch(fetchOneReview(id));
  }, [id]);

  if (isLoading || !review) return <Spinner />;

  return (
    <Container component="main">
      <Detail review={review} />
      <CommentSection review={review} />
    </Container>
  );
};

export default DetailReview;
