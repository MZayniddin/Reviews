import { useTranslation } from "react-i18next";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

const GradeSelect = ({ grade, handleGradeChange }) => {
  const { t } = useTranslation();
  return (
    <Box maxWidth={90} flex={1}>
      <FormControl fullWidth>
        <InputLabel id="review-grade-label">{t("grade")}</InputLabel>
        <Select
          name="grade"
          onChange={handleGradeChange}
          labelId="review-grade-label"
          id="review-grade"
          label="Grade"
          value={grade}
        >
          <MenuItem disabled value={0}>
            1-10
          </MenuItem>
          {new Array(10).fill("*").map((_, index) => (
            <MenuItem key={index} value={index + 1}>
              {index + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default GradeSelect;
