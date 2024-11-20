import localFont from "next/font/local";
import "./globals.css";
import Nav from "./ui/Nav";
import NavBar from "./ui/NavBar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Curse of the Secret Pools!",
  description: "A NextJS app for editing saved games from the classic Dungons and Drgaons Gold Box PC games.",
};

const newDate = new Date();
const newYear = newDate.getFullYear();

export default function RootLayout({ children }) {
  return (
    <>
    
    <html lang="en">
      
      <body
        className={`antialiased`}
      >
        {/* <Nav /> */}
        <NavBar />
        {children}
        <p className="text-center mb-20">Copyright {newYear} by <a href="https://chadmusick.com" className="text-blue-600 font-semibold">Chad Musick</a></p>
      </body>
    </html>
    </>
  );
}
