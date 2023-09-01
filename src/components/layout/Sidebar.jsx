import React from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Link className="sidebarElement" to="/">
        <div className="elementLogo">
          <HomeOutlinedIcon fontSize="medium" />
        </div>
        Home
      </Link>
      <Link className="sidebarElement" to="/quotes">
        <div className="elementLogo">
          <FormatQuoteOutlinedIcon fontSize="medium" />
        </div>
        Quotes
      </Link>
      <Link className="sidebarElement" to="/authors">
        <div className="elementLogo">
          <PersonPinCircleOutlinedIcon fontSize="medium" />
        </div>
        Authors
      </Link>
      <Link className="sidebarElement" to="/about">
        <div className="elementLogo">
          <InfoOutlinedIcon fontSize="medium" />
        </div>
        About
      </Link>
    </div>
  );
};
