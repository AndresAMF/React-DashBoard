import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const SideBarItem = ({ item, active }) => {
  return (
    <Link
      to={item.path}
      // Consulta si el item está activo y hace el cambio de clase
      className={active ? "sidebar-item-active" : "sidebar-item"}
    >
      <img
        src={item.icon}
        alt={`icon-${item.icon}`}
        className="sidebar-item-icon"
      />
      <span className="sidebar-item-label">{item.title}</span>
    </Link>
  );
};
export default SideBarItem;
