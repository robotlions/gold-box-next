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
    image: "/opengraph-image.jpg",
  }
};

const newDate = new Date();
const newYear = newDate.getFullYear();

export default function RootLayout({ children }) {
  return (
    <>
    
    <html lang="en">
      
      <body
        className={`antialiased bg-gray-50`}
      >
        <h1 className="hidden">Dungeons and Dragons Forgotten Realms Gold Box PC Video games character editor. Hack edit cheat saved games for Pool of Radiance, Curse of the Azure Bonds, Secret of the Silver Blades, Pools of Darkness. Forgotten Realms, Dungeons and Dragons, Advanced Dungeons and Dragons, gold box games.</h1>
        <GoogleAnalytics gaId="G-SF7K44XDRR" />
        <NavBar />
        {children}
        <p className="text-center mb-5">Do you like Dungeons and Dragons? Then you might like our <a href="https://dnd35.robotlions.com" className="text-blue-600 font-semibold">D&D 3.5 Character Creator</a></p>
        <p className="text-center mb-20">Copyright {newYear} by <a href="https://chadmusick.com" className="text-blue-600 font-semibold">Chad Musick</a></p>
      </body>
    </html>
    </>
  );
}
