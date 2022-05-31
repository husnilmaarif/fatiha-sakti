// dependency
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// page
export default function Sidebar() {
  const [show, setShow] = useState(false);
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
    <main className={show ? "space-toggle" : null}>
      <header className={show ? "space-toggle" : null}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <MenuIcon />
        </div>
      </header>

      <div className={show ? 'sidebar' : null}>
        <ul className="sidebarList">
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
    </main>
  );
}
