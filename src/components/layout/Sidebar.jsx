import { SidebarElement } from "./SidebarElement";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div role="aside" id="sidebar">
      <div>
        <SidebarElement elementName={"Home"} />
        <SidebarElement elementName={"Quotes"} />
        <SidebarElement elementName={"Authors"} />
        <SidebarElement elementName={"About"} />
      </div>
    </div>
  );
};
