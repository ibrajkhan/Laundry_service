import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QuestionMark from "@mui/icons-material/QuestionMark";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

export default function App() {
  return (
    <Box
      className="App"
      sx={{
        display: "grid",
        gridTemplateColumns: "270px 270px",
        gridGap: 10,
      }}
    >
      <IconTextField label="Search" iconStart={<SearchIcon />} />
    </Box>
  );
}

const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null,
      }}
    />
  );
};
