// dependency
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

// assets
import logo from "../assets/gadjian.png";
import profil from "../assets/profile.png";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// page
export default function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const sidebarData = [
    {
      title: "Beranda",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      title: "Personnel List",
      icon: <GroupsIcon />,
      link: "/personnelList",
    },
    {
      title: "Daily Attendance",
      icon: <CalendarMonthIcon />,
      link: "/dailyAttendance",
    },
  ];

  return (
    // semua style berada di file App.css
    <main>
      <header className="p-4">
        <div className="header-toggle" onClick={handleShow}>
          <MenuIcon />
        </div>
        {/* logo mobile */}
        <img
          src={logo}
          alt="logo"
          className="justify-content-center align-items-center me-auto"
          width={100}
        />
        {/* profil desktop */}
        <div className="profil-desk align-items-center">
          Hallo, <span>Gadjian User</span>
          <Link to="/profil">
            <img src={profil} alt="user" className="p-2" width={50} />
          </Link>
        </div>
      </header>

      {/* navigasi desktop */}
      <div className="sidebar" show={show} onHide={handleClose}>
        <img
          src={logo}
          alt="logo"
          className="d-flex justify-content-center m-4"
          width={150}
        />
        <ul className="sidebarList" closeButton>
          {sidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row active"
                onClick={() => {
                  navigate(val.link);
                }}
              >
                <div>
                  <span className="me-2 mb-5">{val.icon}</span> {val.title}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* navigasi mobile */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src={logo}
              alt="logo"
              className="d-flex justify-content-center m-3"
              width={150}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="sidebarList" closeButton>
            {sidebarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className="row active"
                  onClick={() => {
                    navigate(val.link);
                  }}
                >
                  <div>
                    <span className="me-2 mb-5">{val.icon}</span> {val.title}
                  </div>
                </li>
              );
            })}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
}
