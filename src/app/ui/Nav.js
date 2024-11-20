'use client'

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';




export default function Nav() {
const pathname = usePathname();
  const links = [
    { linkName: "Pool of Radiance", href: "/poolofradiance" },
    {
      linkName: "Curse of the Azure Bonds",
      href: "/azurebonds",
    },
    { linkName: "Secret of the Silver Blades", href: "/silverblades" },
    {linkName: "Pools of Darkness", href: "/poolsofdarkness"},
    {linkName: "About", href: "/about"},
    {linkName: "robotlions.com", href:"https://robotlions.com"}
    
    
  ];

  function LinkMap() {
    return(
    
    links.map((link) => {
    return (
      <li key={link.linkName}>
      <Link
        
        href={link.href}
        className={clsx(
          'inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4',
          {
            'bg-sky-100 text-blue-600': pathname === link.href,
          },
        )}
        >
        <p className="hidden md:block">{link.linkName}</p>
      </Link>
      </li>
    )})
    
    )};




    return (
        <ul className="flex justify-between items-center mx-5 mt-5">
         <li key="Curse"><Link href="/"><h6 className="text-2xl">Curse of the Secret Pools!</h6></Link></li>
        <LinkMap />
      </ul>
    )
}