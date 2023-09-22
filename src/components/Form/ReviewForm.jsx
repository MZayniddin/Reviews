import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { upload } from "../../api";

import TextEditor from "../TextEditor/TextEditor";
import CategorySelect from "../Select/CategorySelect";
import GradeSelect from "../Select/GradeSelect";
import InputTags from "./InputTags";
import Input from "./Input";

const initialStateForm = {
  title: "",
  name: "",
  category: "",
  grade: 0,
  tags: [],
  description: "Write your description",
  image: "",
};

const fileTypes = ["JPEG", "JPG", "PNG"];

const ReviewForm = () => {
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
    <Box
      component="form"
      bgcolor={theme.palette.action.disabledBackground}
      p={3}
      borderRadius={2}
      mb={3}
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
        my={4}
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

        <CategorySelect
          activeCategory={reviewData.category}
          handleCategoryChange={handleChange}
        />

        <GradeSelect
          grade={reviewData.grade}
          handleGradeChange={handleChange}
        />

        <InputTags reviewData={reviewData} setReviewData={setReviewData} />
      </Box>

      <TextEditor reviewData={reviewData} setReviewData={setReviewData} />

      <Button sx={{ mt: 3 }} variant="contained">
        Publish
      </Button>
    </Box>
  );
};

export default ReviewForm;
