import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Modal from "../../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";

export default function Users(props) {
  const [search, setSearch] = useState("");
  const { data } = props;
  const [users, setUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  // console.log(data);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    if (search === undefined || search === "" || search === null) {
      setUsers(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    } else {
      let search_results = data.filter(
        (item) =>
          item.name.first.toLowerCase().includes(search.toLowerCase()) ||
          item.name.last.toLowerCase().includes(search.toLowerCase()) ||
          item.gender.toLowerCase() === search ||
          item.location.country.toLowerCase() === search
      );
      setUsers(search_results.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(search_results.length / itemsPerPage));
    }

    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  }, [itemOffset, itemsPerPage, data, search]);

  // PageClick
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  // Search
  const __handleSearch = (event) => {
    setSearch(event.target.value);
    // console.log(event.target.value)
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
              onChange={(e) => __handleSearch(e)}
            />
          </div>
        </div>

        {users.length !== 0 ? (
          <div>
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
                      {user.email}
                    </div>
                    <div className="contacts-element">
                      <FontAwesomeIcon
                        className="contacts-icon"
                        icon={faPhone}
                      />
                      {user.phone}
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
        ) : null}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
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
