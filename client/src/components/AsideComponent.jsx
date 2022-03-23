import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./Css/AsideComponent.css";

const AsideComponent = () => {
  return (
    <div className="aside__icon">
      <div>
        <HomeIcon sx={{ "&:hover": { color: "#5861ae" } }} />
      </div>
      <div>
        <AddCircleIcon sx={{ "&:hover": { color: "#5861ae" } }} />
      </div>
      <div>
        <DehazeIcon sx={{ "&:hover": { color: "#5861ae" } }} />
      </div>
    </div>
  );
};

export default AsideComponent;
