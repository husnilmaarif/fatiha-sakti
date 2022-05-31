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

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Beranda />} />
        <Route path="/personnelList" element={<PersonnelList />} />
        <Route path="/dailyAttandance" element={<DailyAttendance />} />
      </Routes>
    </Router>
  );
}

export default App;
