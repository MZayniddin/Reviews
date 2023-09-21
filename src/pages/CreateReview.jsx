import { useState } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FileUploader } from "react-drag-drop-files";

import CategorySelect from "../components/Select/CategorySelect";
import InputFileUpload from "../components/Form/InputFileUpload";
import GradeSelect from "../components/Select/GradeSelect";
import Input from "../components/Form/Input";
import axios from "axios";
import { upload } from "../api";

const initialStateForm = {
  title: "",
  name: "",
  category: "",
  grade: 0,
  tags: "",
  description: "",
  image: "",
};

const fileTypes = ["JPEG", "JPG", "PNG"];

const CreateReview = () => {
  const theme = useTheme();
  const [reviewData, setReviewData] = useState(initialStateForm);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleCoverChange = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await upload(formData);
      setFile(data.link);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main">
      <Typography variant="h6" my={2}>
        Create Review
      </Typography>
      <Box
        bgcolor={theme.palette.action.disabledBackground}
        p={3}
        borderRadius={2}
      >
        <Box
          display="flex"
          gap={2}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <FileUploader
            name="file"
            handleChange={handleCoverChange}
            types={fileTypes}
            required={true}
          />

          <img
            src={file ? file : ""}
            className={file && "w-2/3 h-36 md:w-1/3 md:h-48 object-cover"}
          />
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          gap={2}
          flexWrap="wrap"
          mt={4}
        >
          <Input
            type="text"
            name="title"
            label="Review Title"
            handleChange={handleChange}
            multiline={true}
          />
          <Input
            type="text"
            name="name"
            label="Name of the piece of art"
            handleChange={handleChange}
          />

          {/* <CategorySelect /> */}
          <GradeSelect
            grade={reviewData.grade}
            handleGradeChange={handleChange}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default CreateReview;
