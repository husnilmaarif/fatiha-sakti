// dependency & picture
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import logo from "../assets/gadjian.png";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// page
export default function Sidebar() {
  // const [show, setShow] = useState(false);
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
    <main className="space-toggle">
      <header className="space-toggle p-5">
        <div className="header-toggle" onClick={handleShow}>
          <MenuIcon />
        </div>
        {/* logo versi mobile */}
        <img
          src={logo}
          alt="logo"
          className="d-flex justify-content-center m-3 me-auto"
          width={100}
        />
        {/* profil desktop */}
        <div className="ms-auto">
          Hallo, <span style={{color: '#23c2c6'}}>Gadjian User</span>
          <img src={logo} alt='user' width={50} />
        </div>
      </header>

      {/* navigasi desktop */}
      <div className="sidebar" show={show} onHide={handleClose}>
        <img
          src={logo}
          alt="logo"
          className="d-flex justify-content-center m-3"
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
