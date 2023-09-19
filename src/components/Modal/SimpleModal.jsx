import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SimpleModal = ({ handleClose, open, onSubmit }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-delete-review"
      aria-describedby="modal-modal-for-delete-review"
    >
      <Box sx={style}>
        <Typography id="modal-modal-are-you-sure-to-delete" variant="h6" component="h2">
          Are you sure to delete?
        </Typography>
        <Box display="flex" mt={2} gap={1}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="error" onClick={onSubmit}>
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SimpleModal;
