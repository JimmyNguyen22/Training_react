import logo from "./logo.svg";
import "./App.css";
import DemoFunctionCom from "./Components/Demo/DemoFunctionCom";
import DemoClassCom from "./Components/Demo/DemoClassCom";
import BaiTapLayOut from "./Components/BaiTapLayOut/BaiTapLayOut";
import Databinding from "./Components/DataBinding/Databinding";
import HandleEven from "./HandleEvent/HandleEven";
import Style from "./StyleJSX/Style";
import StateDemo from "./StateDemo/StateDemo/StateDemo";
import BaiTapChonXe from "./StateDemo/BaiTap/BaiTapChonXe";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayOut></BaiTapLayOut> */}
      {/* <Databinding></Databinding> */}
      {/* <HandleEven></HandleEven> */}
      {/* <Style></Style> */}
      <StateDemo />
    </div>
  );
}

export default App;
