import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";

const Layout = () => {
  return (
    <div
      style={{
        maxWidth: "37.5rem",
        minHeight: "100vh",
        margin: "0 auto",
        position: "relative",
        backgroundColor: "transparent",
      }}
    >
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
