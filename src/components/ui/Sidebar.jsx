import { SidebarElement } from "./SidebarElement";

export const Sidebar = () => {
  return (
    <div role="aside">
      <div>
        <SidebarElement elementName={"Home"} />
        <SidebarElement elementName={"Quotes"} />
        <SidebarElement elementName={"Authors"} />
        <SidebarElement elementName={"About"} />
      </div>
    </div>
  );
};
