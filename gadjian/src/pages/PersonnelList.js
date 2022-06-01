// dependency
import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

// icons
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

// component
import Users from "../components/Users";

// page
function PersonnelList() {
  // hooks
  const [user, setUser] = useState("");

  const handleSubmit = () => {
    console.log("berhasil");
  };

  return (
    <>
      <div className="background-pages">
        <div className="container bg-light py-3">
          <div
            className="row mx-3 justify-content-center align-items-center"
            style={{ backgroundColor: "white" }}
          >
            <div className="col-md-6">
              <div className="m-1">
                <h1 style={{ color: "#23c2c6" }}>Personnel List</h1>
                <p style={{ fontSize: "20px" }}>List of all personnels</p>
              </div>
            </div>
            <div className="col-md-3">
              <form onSubmit={handleSubmit}>
                <InputGroup size="md" className="m-1">
                  <InputGroup.Text className="bg-light">
                    <SearchSharpIcon
                      type="submit"
                      style={{ fontSize: "30px", color: "#23c2c6" }}
                    />
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Medium"
                    aria-describedby="inputGroup-sizing-md"
                    placeholder="Find Personnels"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </InputGroup>
              </form>
            </div>
            <div className="col-md-3">
              <button
                className="btn text-light p-2 w-100 m-1"
                style={{ backgroundColor: "#23c2c6", fontWeight: "bold" }}
              >
                ADD PERSONNEL{" "}
                <span className="text-end">
                  <AddOutlinedIcon />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="container bg-light py-3 mt-4">
          <div className="row mx-2 bg-light justify-content-center">
            <Users />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonnelList;
