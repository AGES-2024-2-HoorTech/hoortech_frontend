import "./languageDropdownComponent.css";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [traduzir, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 240 }}>
      <FormControl fullWidth className="dropdown">
        <InputLabel id="traduzirInput">Escolha a tradução</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="traduzirSelect"
          value={traduzir}
          label="traduzir"
          onChange={handleChange}
        >
          <MenuItem value={"lb"}>Libras</MenuItem>
          <MenuItem value={"as"}>ASL</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
