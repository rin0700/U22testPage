import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Netshop from "../pages/Netshop";
import Inquire from "../pages/Inquire";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/netshop" element={<Netshop />} />
          <Route path="/inquire" element={<Inquire />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
