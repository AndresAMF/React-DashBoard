import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchUrl } from "./api/Api-conecction";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "./components/Sidebar";
import sidebar_menu from "./constants/sidebar-menu";
import Users from "./pages/Users";
import Gender from "./pages/Gender";
import Country from "./pages/Country";
import Age from "./pages/Age";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetchUrl();
      const response = await rawData.json();
      const results = response.results;
      setData(results);
    };
    fetchData(); 
  }, []);

  return (
    <Router>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />

        <div className="dashboard-body">
          <Routes>
            <Route path="*" element={<div></div>} />
            <Route exact path="/" element={<Users data={data} />} />
            <Route exact path="/gender" element={<Gender data={data} />} />
            <Route exact path="/country" element={<Country data={data} />} />
            <Route exact path="/age" element={<Age data={data} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
