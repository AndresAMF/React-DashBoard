import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBarItem from "./sidebar-item";
import "./styles.css";

function SideBar({ menu }) {
  // Se reciben los objetos del menú via props
  const location = useLocation();
  // Por default el item activo es el que contiene el id 1
  const [active, setActive] = useState(1);

  useEffect(() => {
    menu.forEach((element) => {
      // se revisa si el pathname de location hace match con el path del 
      // elemento que se selecciona y se cambia el 
      // item activo tomando su id
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

        <div className="sidebar-items">
          {menu.map((item, index) => (
            // Se ejecuta función que cambia el id seteado y se envian 
            // por props la info del item y si se encuentra activo
            <div key={index} onClick={() => navigate(item.id)}>
              <SideBarItem active={item.id === active} item={item} />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
