// dependency
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

// icon
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function Users() {
  // hooks
  const [dataUsers, setDataUser] = useState([]);

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

  return (
    <>
      {/* looping card user */}
      {dataUsers.map((user, index) => {
        return (
          <div className="col-md-3 rounded-10 mb-3">
            <Card key={index} className="w-100">
              <ListGroup.Item>
                Personnel ID:{" "}
                <span style={{ color: "#23c2c6" }}>
                  {user.location.postcode}
                </span>
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
      })}
    </>
  );
}

export default Users;
