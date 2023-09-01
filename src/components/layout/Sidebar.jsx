import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  // const menuItem = [
  //   {
  //     path: "/",
  //     name: "App",
  //   },
  //   {
  //     path: "/home",
  //     name: "Home",
  //   },
  //   {
  //     path: "/quotes",
  //     name: "Quotes",
  //   },
  //   {
  //     path: "/authors",
  //     name: "Authors",
  //   },
  //   {
  //     path: "/about",
  //     name: "About",
  //   },
  // ];

  return (
    <nav className="Sidebar">
      <Link to="/">Home</Link>
      <Link to="/quotes">Quotes</Link>
      <Link to="/authors">Authors</Link>
      <Link to="/about">About</Link>
    </nav>
  );

  // return (
  //   <div className="container">
  //     <div className="sidebar">
  //       <div className="top_section">
  //         <h1 className="logo">Logo</h1>
  //         <div className="bars">Lg</div>
  //       </div>
  //       {menuItem.map((item, index) => (
  //         <NavLink
  //           to={item.path}
  //           key={index}
  //           className="link"
  //           activeclassName="active"
  //         >
  //           <div className="icon">icon</div>
  //           <div className="link_text">{item.name}</div>
  //         </NavLink>
  //       ))}
  //     </div>
  //   </div>
  // );
};
