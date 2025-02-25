import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/common/Sidebar";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Partners from "./components/common/Partners";
import Chat from "./components/chat/Chat";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  let [showSideBar, setShowSidebar] = React.useState(false);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header setShowSidebar={setShowSidebar} />
      <SideBar showSideBar={showSideBar} setShowSidebar={setShowSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Partners />
      <Chat />
    </BrowserRouter>
  );
};

export default App;
