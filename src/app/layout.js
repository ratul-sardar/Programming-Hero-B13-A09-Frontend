import "./globals.css";
import { satoshi, inter } from "./fonts";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import { Footer } from "@/components/shared/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

export const metadata = {
  title: "Drive Fleet | Rent your's now!",
  description: "Drive Fleet provides with affordable renting of cars!!!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${inter.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
