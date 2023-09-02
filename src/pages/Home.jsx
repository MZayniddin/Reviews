import { useEffect } from "react";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";

import { fetchReviews } from "../store/review/review.action";

import Intro from "../components/Intro/Intro";
import RecentReviews from "../components/recent-reviews/RecentReviews";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);

  return (
    <Container component="main">
      <Intro />
      <RecentReviews />
    </Container>
  );
};

export default Home;
