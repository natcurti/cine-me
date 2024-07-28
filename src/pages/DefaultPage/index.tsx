import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import NavBar from "src/components/NavBar";

const DefaultPage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultPage;
