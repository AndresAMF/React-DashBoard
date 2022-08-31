import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBarItem from "./sidebar-item";
import "./styles.css";

function SideBar({ menu }) {
  const location = useLocation();

  const [active, setActive] = useState(1);

  useEffect(() => {
    menu.forEach((element) => {
      if (location.pathname === element.path) {
        setActive(element.id);
      }
    });
  }, [location.pathname, menu]);

  const navigate = (id) => {
    setActive(id);
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-logo-container">
          <h3 className="sidebar-title">Welcome,</h3>
          <h3 className="sidebar-title-name">Camilo</h3>
        </div>

        {/* <div className="sidebar-container"> */}
          <div className="sidebar-items">
            {menu.map((item, index) => (
              <div key={index} onClick={() => navigate(item.id)}>
                <SideBarItem active={item.id === active} item={item} />
              </div>
            ))}
          </div>
        {/* </div> */}
      </div>
    </nav>
  );
}

export default SideBar;
