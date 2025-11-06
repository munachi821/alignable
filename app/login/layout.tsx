import Navbar from "@/components/LoginPage/Navbar";
import "../globals.css";
import Footer from "@/components/LoginPage/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default layout;
