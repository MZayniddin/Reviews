import { useRef } from "react";
import { Box, TextField, Stack, Typography } from "@mui/material";

import Cancel from "@mui/icons-material/Cancel";

const Tags = ({ data, handleDelete }) => {
  return (
    <Box
      sx={{
        background: "#283240",
        height: "100%",
        display: "flex",
        padding: "0.4rem",
        margin: "0 0.5rem 0 0",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
      }}
    >
      <Stack direction="row" gap={1}>
        <Typography>{data}</Typography>
        <Cancel
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

const InputTags = ({ reviewData, setReviewData }) => {
  const tagRef = useRef();

  const handleDelete = (value) => {
    const newtags = reviewData.tags.filter((val) => val !== value);
    setReviewData({ ...reviewData, tags: newtags });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setReviewData({
      ...reviewData,
      tags: [...reviewData.tags, tagRef.current.value.trim()],
    });
    tagRef.current.value = "";
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleOnSubmit}>
        <TextField
          inputRef={tagRef}
          fullWidth
          variant="standard"
          size="small"
          sx={{ margin: "1rem 0" }}
          margin="none"
          disabled={reviewData.tags.length > 3}
          placeholder={reviewData.tags.length < 4 ? "Add up to 4 tags..." : ""}
          InputProps={{
            startAdornment: (
              <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
                {reviewData.tags.map((data, index) => {
                  return (
                    <Tags data={data} handleDelete={handleDelete} key={index} />
                  );
                })}
              </Box>
            ),
          }}
        />
      </form>
    </Box>
  );
};

export default InputTags;
