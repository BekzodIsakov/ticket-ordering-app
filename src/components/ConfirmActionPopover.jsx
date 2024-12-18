import { useState } from "react";
import { Popover, Button, Typography, Box } from "@mui/material";

const ConfirmActionPopover = ({
  buttonText = "Confirm",
  buttonColor = "primary",
  onConfirm,
  confirmationMessage = "Are you sure?",
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Open Popover Handler
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget); // Set anchor to button position
  };

  // Close Popover Handler
  const handleClose = () => {
    setAnchorEl(null); // Clear anchor to close popover
  };

  // Confirm Action Handler
  const handleConfirm = () => {
    onConfirm(); // Call the confirm callback
    handleClose(); // Close the popover
  };

  return (
    <>
      {/* Trigger Button */}
      <Button variant='contained' color={buttonColor} onClick={handleOpen}>
        {buttonText}
      </Button>

      {/* Confirmation Popover */}
      <Popover
        open={Boolean(anchorEl)} // Open when anchorEl is not null
        anchorEl={anchorEl} // Attach popover to anchor element
        onClose={handleClose} // Close on outside click
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Typography variant='body1' sx={{ mb: 2 }}>
            {confirmationMessage}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <Button
              variant='contained'
              color='error'
              size='small'
              onClick={handleConfirm} // Confirm action
            >
              Yes
            </Button>
            <Button
              variant='outlined'
              color='primary'
              size='small'
              onClick={handleClose} // Close popover
            >
              No
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default ConfirmActionPopover;
