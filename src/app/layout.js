import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Breadcrumb from "./components/breadcrum";
import { Provider } from "react-redux";
import { store } from "../store/store";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Envision Monitoring Tool",
  description: "This tool to manage L2 Support Activities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/* <Provider store={store}> */}
        <Header />
        <div className="pl-5">
        <Breadcrumb />
        </div>
        {children}
        {/* </Provider> */}
      </body>
    </html>
  );
}
