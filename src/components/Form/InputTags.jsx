import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { selectReviews } from "../../store/review/review.selector";

const InputTags = ({ reviewData, setReviewData }) => {
  const reviews = useSelector(selectReviews);
  const { t } = useTranslation();

  const getTags = (reviews) => {
    let tags = [];
    for (const item of reviews) {
      for (const tag of item.tags) {
        tags.push(tag);
      }
    }
    return tags;
  };

  const options = getTags(reviews);

  console.log(reviewData.tags);

  return (
    <Autocomplete
      sx={{ flexGrow: 1 }}
      multiple
      id="tags-standard"
      options={options}
      freeSolo
      onChange={(e, newValue) => {
        setReviewData({ ...reviewData, tags: [...newValue] });
      }}
      value={reviewData.tags}
      limitTags={4}
      getOptionLabel={(option) => option}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={t("tags")}
          //   placeholder="Add up 4 tags.."
        />
      )}
    />
  );
};

export default InputTags;
