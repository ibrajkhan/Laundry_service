import { Input } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = () => {
  return (
    <Input
      id="input-with-icon-adornment"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  ); 
};

export default SearchComponent;
