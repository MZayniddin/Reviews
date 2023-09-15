import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

const ProfileSortSelect = ({ handleSortChange, sortType }) => {
  return (
    <Box maxWidth={200} flex={1}>
      <FormControl fullWidth>
        <InputLabel id="profile-sort-label">Sort</InputLabel>
        <Select
          onChange={handleSortChange}
          labelId="profile-sort-label"
          id="profile-sort"
          label="Sort"
          value={sortType}
        >
          <MenuItem value={-1}>First added</MenuItem>
          <MenuItem value={1}>Last added</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProfileSortSelect;
