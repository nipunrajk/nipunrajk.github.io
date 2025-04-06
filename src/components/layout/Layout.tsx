import { ReactNode } from "react";
import Header from "./Header";
// import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />
      {/* need to address the header height */}
      <main className='pt-56'>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
