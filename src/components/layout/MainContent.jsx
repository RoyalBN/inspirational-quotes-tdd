import React from "react";
import { Home } from "../../pages/Home/Home";
import { Sidebar } from "./Sidebar";

export const MainContent = () => {
  return (
    <div id="content">
      <div id="sidebar">
        <Sidebar />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
};
