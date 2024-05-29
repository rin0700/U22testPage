import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Netshop from "../pages/Netshop";
import Inquire from "../pages/Inquire";
import LoginSuccess from "../pages/LoginSuccess";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/netshop" element={<Netshop />} />
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/LoginSuccess" element={<LoginSuccess />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
