// style & dependency
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Sidebar from "./components/Sidebar";

// pages
import Beranda from "./pages/Beranda";
import PersonnelList from "./pages/PersonnelList";
import DailyAttendance from "./pages/DailyAttendance";
import Profil from "./pages/Profil";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Beranda />} />
        <Route path="/personnelList" element={<PersonnelList />} />
        <Route path="/dailyAttendance" element={<DailyAttendance />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;
