import { Outlet } from "react-router";
import { Navbar } from "../Common/Navbar";
import { Footer } from "../Common/Footer";

const Main = () => {
  return (
    <div className="">
      <div style={{ boxShadow: "2px 2px 5px #fff" }}>
        <Navbar />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
