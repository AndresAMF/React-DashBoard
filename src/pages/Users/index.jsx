import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Modal from "../../components/Modal";
import Spinner from 'react-bootstrap/Spinner';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function Users(props) {
  // Se definen states
  const [search, setSearch] = useState("");
  // Se recibe data via props
  const { data } = props;
  const [users, setUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    // si search está vacío utiliza toda la data, sino filtra la data con el valor de search
    if (search === undefined || search === "" || search === null) {
      setUsers(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    } else {
      let search_results = data.filter(
        (item) =>
          item.name.first.toLowerCase().includes(search.toLowerCase()) ||
          item.name.last.toLowerCase().includes(search.toLowerCase()) ||
          item.gender.toLowerCase() === search.toLocaleLowerCase() ||
          item.location.country.toLowerCase() === search.toLocaleLowerCase()
      );

      setUsers(search_results.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(search_results.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, data, search]);

  // Función del evento click para el paginador
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  // Función que escucha el cambio de contenido en search
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Users List</h2>
          <div className="dashboard-content-search">
            <input
              type="text"
              value={search}
              placeholder="Filter Gender / Name / Country"
              className="dashboard-content-input"
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </div>

        {users.length !== 0 ? (
          <div>
            {/* Se mapean los usuarios para crear las cards */}
            {users.map((user, index) => (
              <div key={index} className="card-container">
                <img
                  className="dashboard-content-avatar"
                  src={user.picture.medium}
                  alt={user.name.first + " " + user.name.last}
                />
                <div className="card-info">
                  <h5>{user.name.first + " " + user.name.last}</h5>
                  <address>
                    {user.location.street.number +
                      " " +
                      user.location.street.name +
                      ", " +
                      user.location.city +
                      ", " +
                      user.location.state +
                      ", " +
                      user.location.country}
                  </address>
                  <div className="card-contact">
                    <div className="contacts-element">
                      <FontAwesomeIcon
                        className="contacts-icon"
                        icon={faEnvelope}
                      />
                      <p>{user.email}</p>
                    </div>
                    <div className="contacts-element">
                      <FontAwesomeIcon
                        className="contacts-icon"
                        icon={faPhone}
                      />
                      <p>{user.phone}</p>
                    </div>
                    <Modal
                      name={user.name}
                      location={user.location}
                      picture={user.picture}
                      age={user.dob}
                      email={user.email}
                      phone={user.phone}
                      cell={user.cell}
                      registered={user.registered}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : <div className="spinner">
            <h4>Loading...</h4>
            <Spinner  animation="grow" />
            </div>}
      </div>
      <ReactPaginate
        breakLabel=""
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </div>
  );
}
