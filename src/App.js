import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SmartPhoneAdd from "./components/SmartPhoneAdd";
import SmartPhoneSearch from "./components/SmartPhoneSearch";
import SmartPhoneDelete from "./components/SmartPhoneDelete";
import SmartPhoneView from "./components/SmartPhoneView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SmartPhoneAdd />} />
          <Route path="search" element={<SmartPhoneSearch />} />
          <Route path="delete" element={<SmartPhoneDelete />} />
          <Route path="view" element={<SmartPhoneView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
