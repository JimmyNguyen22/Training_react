import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./assets/scss/demoburger.scss";
import App from "./App";
// Cấu hình react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ReactForm from "./pages/ReactForm/ReactForm";
import ReactLifecycle from "./pages/ReactLifeCycle/ReactLifecycle";
import BaiTapThucHanhLayout from "./Components/BaiTapLayOut/BaiTapThucHanhLayout";
import StateDemo from "./StateDemo/StateDemo/StateDemo";
import BaiTapGlasses from "./Components/BaiTapReact/BaiTapGlasses";
import CarStore from "./Props/BaiTapCarStore/CarStore";

// Cài đặt redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoTangGiamSL from "./DemoRedux/DemoTangGiamSL/DemoTangGiamSL";
import DemoChonXe from "./DemoRedux/DemoChonXe/DemoChonXe";
import DemoFormRedux from "./DemoRedux/DemoFormRedux/DemoFormRedux";
import DemoBurger from "./DemoRedux/DemoBurger/DemoBurger";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
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
            <Route
              path="demonumber"
              element={<DemoTangGiamSL></DemoTangGiamSL>}
            ></Route>
            <Route
              path="demochonxe"
              element={<DemoChonXe></DemoChonXe>}
            ></Route>{" "}
            <Route
              path="demoburger"
              element={<DemoBurger></DemoBurger>}
            ></Route>
            <Route path="demoformredux" element={<DemoFormRedux />}></Route>
            {/* <Route path="*" element={<Page404></Page404>}></Route> */}
            <Route path="*" element={<Navigate to="" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
