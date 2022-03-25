import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./Css/AsideComponent.css";
import { Link } from 'react-router-dom';

const AsideComponent = () => {
  return ( 
    <div className="aside__icon">
      <div>
        <Link to='/'><HomeIcon sx={{ "&:hover": { color: "#5861ae" } }} /></Link>
      </div>
      <div>
      <Link to='/order'><AddCircleIcon sx={{ "&:hover": { color: "#5861ae" } }} /></Link>
      </div>
      <div>
       <Link to='/orders'><DehazeIcon sx={{ "&:hover": { color: "#5861ae" } }} /></Link>
      </div>
    </div>
  );
};

export default AsideComponent;
