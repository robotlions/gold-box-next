
import "./globals.css";
import NavBar from "./ui/NavBar";
import Link from "next/link";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const newDate = new Date();
const newYear = newDate.getFullYear();

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

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        {/* <head>
          <title>Curse of the Secret Pools!</title>
          <meta
            name="description"
            content="Website for editing characters from the Dungeons and Dragons 'Gold Box' series of video games"
          />
          <meta
            property="og:title"
            content="Curse of the Secret Pools: Advanced Dungeons and Dragons Gold Box Character Editor"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/AdnDSplash.jpg" />
          <meta property="og:url" content="https://goldbox.robotlions.com" />
          <meta
            property="og:description"
            content="A website for editing characters from the Advanced Dungeons and Dragons 'Gold Box' series of video games"
          />
        </head> */}

        <body className={`antialiased bg-gray-50`}>
          <h1 className="hidden">
            Dungeons and Dragons Forgotten Realms Gold Box PC Video games
            character editor. Hack edit cheat saved games for Pool of Radiance,
            Curse of the Azure Bonds, Secret of the Silver Blades, Pools of
            Darkness. Forgotten Realms, Dungeons and Dragons, Advanced Dungeons
            and Dragons, gold box games.
          </h1>
          <GoogleAnalytics gaId="G-SF7K44XDRR" />
          <GoogleTagManager gtmId="GTM-TDZKMK5Z" />
          <NavBar />
          {children}
          <p className="text-center mb-5">
            Do you like Dungeons and Dragons? Then you might like our{" "}
            <Link
              href="https://dnd35.robotlions.com"
              className="text-blue-600 font-semibold"
            >
              D&D 3.5 Character Creator
            </Link>
          </p>
          <p className="text-center mb-20">
            Copyright {newYear} by{" "}
            <Link
              href="https://chadmusick.com"
              className="text-blue-600 font-semibold"
            >
              Chad Musick
            </Link>
          </p>
        </body>
      </html>
    </>
  );
}
