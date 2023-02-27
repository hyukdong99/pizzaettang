import "./App.css";
import Main from "./com/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Brand from "./Story/Brand";
import Cf from "./Story/Cf";
import Found from "./Story/Found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} exact={true}></Route>
      <Route path="/Story/Brand" element={<Brand />}></Route>
      <Route path="/Story/Cf" element={<Cf />}></Route>
      <Route path="/Story/Found" element={<Found />}></Route>
    </Routes>
  );
}

export default App;
