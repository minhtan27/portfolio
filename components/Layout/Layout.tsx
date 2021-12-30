import { FC } from "react";
import Footer from "../Footer";
import Navbar from "../Nav";
import Sidebar from "../Sidebar";

interface LayoutProps {
  pageProps?: {};
}

const Layout: FC<LayoutProps> = ({ children, pageProps }) => {
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
