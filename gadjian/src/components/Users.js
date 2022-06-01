// dependency
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import ReactPaginate from "react-paginate";

// icon
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function Users() {
  // hooks
  const [dataUsers, setDataUser] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    // get data
    axios
      .get("https://randomuser.me/api/?results=28")
      .then((res) => {
        // berhasil
        setDataUser(res.data.results);
      })
      .catch((err) => {
        // gagal
        console.log(err);
      });
  }, []);

  // pagination
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  // looping card user
  const displayUsers = dataUsers
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => {
      return (
        <div className="col-md-3 rounded-10 mb-5" key={index}>
          <Card className="w-100 h-100">
            <ListGroup.Item>
              Personnel ID:{" "}
              <span style={{ color: "#23c2c6" }}>{user.location.postcode}</span>
              {/* <MoreHorizOutlinedIcon /> */}
            </ListGroup.Item>
            <ListGroup.Item>
              <img
                src={user.picture.large}
                alt="profil"
                className="rounded-circle px-4 py-1 mb-3"
              />
              <div>
                <p style={{ fontSize: "15px" }}>
                  Name
                  <br />
                  <span className="text-muted" style={{ fontSize: "15px" }}>
                    {user.name.first} {user.name.last}
                  </span>
                </p>
              </div>
              <div>
                <p style={{ fontSize: "15px" }}>
                  Telephone
                  <br />
                  <span className="text-muted" style={{ fontSize: "15px" }}>
                    {user.phone}
                  </span>
                </p>
              </div>
              <div>
                <p style={{ fontSize: "15px" }}>
                  Birthday
                  <br />
                  <span className="text-muted" style={{ fontSize: "15px" }}>
                    {user.dob.date}
                  </span>
                </p>
              </div>
              <div>
                <p style={{ fontSize: "15px" }}>
                  Email
                  <br />
                  <span className="text-muted" style={{ fontSize: "15px" }}>
                    {user.email}
                  </span>
                </p>
              </div>
            </ListGroup.Item>
          </Card>
        </div>
      );
    });

  const pageCount = Math.ceil(dataUsers.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {/* card user */}
      {displayUsers}

      {/* pagination */}
      <ReactPaginate
        previousLabel={"<<Previous"}
        nextLabel={"Next>>"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}

export default Users;
