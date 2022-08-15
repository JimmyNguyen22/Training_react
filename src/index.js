import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// Cấu hình react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ReactForm from "./pages/ReactForm/ReactForm";
import Page404 from "./pages/Page404/Page404";
import ReactLifecycle from "./pages/ReactLifeCycle/ReactLifecycle";
import BaiTapThucHanhLayout from "./Components/BaiTapLayOut/BaiTapThucHanhLayout";
import StateDemo from "./StateDemo/StateDemo/StateDemo";
import BaiTapGlasses from "./Components/BaiTapReact/BaiTapGlasses";
import CarStore from "./Props/BaiTapCarStore/CarStore";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="reactform" element={<ReactForm />}></Route>
          <Route path="lifecycle" element={<ReactLifecycle />}></Route>
          <Route
            path="baitaplayout"
            element={<BaiTapThucHanhLayout></BaiTapThucHanhLayout>}
          ></Route>
          <Route
            path="baitapglasses"
            element={<BaiTapGlasses></BaiTapGlasses>}
          ></Route>
          <Route path="props" element={<CarStore></CarStore>}></Route>
          <Route path="state" element={<StateDemo></StateDemo>}></Route>
          {/* <Route path="*" element={<Page404></Page404>}></Route> */}
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
