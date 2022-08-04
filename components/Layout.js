import Footer from "./Footer";
// import Navbar from "./Navbar";
import ResponsiveAppBar from "./ResponsiveAppBar";

const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
