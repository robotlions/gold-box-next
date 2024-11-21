import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./ui/NavBar";
import {GoogleAnalytics} from "@next/third-parties/google";

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
  metadataBase: new URL('https://goldbox.robotlions.com'),
  title: "Curse of the Secret Pools!",
  description: "A NextJS app for editing saved games from the classic Dungons and Drgaons Gold Box PC games.",
  openGraph: {
    title:"Curse of the Secret Pools!",
    description: "A web-based app for modifying characters from the classic Dungeons and Dragons gold box PC games.",
    url: "https://goldbox.robotlions.com",
    type: "website",
    siteName: "Curse of the Secret Pools!",
  }
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
        <GoogleAnalytics gaId="G-SF7K44XDRR" />
        <NavBar />
        {children}
        <p className="text-center mb-20">Copyright {newYear} by <a href="https://chadmusick.com" className="text-blue-600 font-semibold">Chad Musick</a></p>
      </body>
    </html>
    </>
  );
}
