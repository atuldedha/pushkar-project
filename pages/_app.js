import { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="flex w-full bg-bgColor h-screen overflow-scroll">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="flex flex-col w-full">
        <Header setShowSidebar={setShowSidebar} />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
