import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { IActionBarProps } from "./action-bar.interface";

export default function ActionBar(props: IActionBarProps) {
  const { isDisabled, handleTextChange, handleConfirm } = props;

  return (
    <Box
      display="flex"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <TextField
        required
        id="outlined-required"
        type="number"
        placeholder="Minutos"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => handleTextChange(e.target.value)}
      />
      <Button
        data-testid="confirm-button"
        variant="contained"
        size="large"
        onClick={handleConfirm}
        sx={{ marginLeft: 3, padding: 2, borderRadius: 10 }}
        disabled={isDisabled}
      >
        Consultar
      </Button>
    </Box>
  );
}
