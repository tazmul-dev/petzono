'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NevLink = ({href, children}) => {

    const pathName = usePathname()
 

    const isActive = href === pathName


    return <Link href={href} className={`${isActive ? " border-b-3 rounded-none border-green-500" :""} font-bold`}>{children}</Link>
};

export default NevLink;