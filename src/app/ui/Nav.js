'use client'

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';




export default function Nav() {
const pathname = usePathname();
  const links = [
    { name: "Pool of Radiance", href: "/poolrad" },
    {
      name: "Curse of the Azure Bonds",
      href: "/curse",
    },
    { name: "Secret of the Silver Blades", href: "/silver" },
    {name: "Pools of Darkness", href: "/pod"},
  ];

  function LinkMap() {
    return(
    
    links.map((link) => {
    return (
      <li key={link.name}>
      <Link
        
        href={link.href}
        className={clsx(
          'inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4',
          {
            'bg-sky-100 text-blue-600': pathname === link.href,
          },
        )}
        >
        <p className="hidden md:block">{link.name}</p>
      </Link>
      </li>
    )})
    
    )};




    return (
        <ul className="flex justify-between">
         <li key="Curse"><Link href="/"><h6 className="md:block">Curse of the Secret Pools!</h6></Link></li>
        <LinkMap />
      </ul>
    )
}