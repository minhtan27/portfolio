import { FC } from "react";
import Footer from "../Footer";
import Navbar from "../Nav";
import Sidebar from "../Sidebar";

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
