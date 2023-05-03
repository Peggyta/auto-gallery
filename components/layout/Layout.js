import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import neoncar from '../../public/assets/neoncar.jpg';
import Logo from '../icons/Logo';


const Layout = ({children}) => {
    return (
        <>
            <header className='w-full'>
                <div className='max-w-7xl mt-3 mx-auto'>
                    <ul className='flex gap-6 pl-6 py-3'>
                        <li><Link className='flex font-semibold links' href='/'>
                            <Logo />
                            CAR FOR YOU 
                        </Link></li>
                        <li><Link className='links' href='/'>Cars</Link></li>
                        <li><Link className='links' href='/'>Buy</Link></li>
                        <li><Link className='links' href='/'>Sell</Link></li>
                        <li><Link className='links' href='/'>Service & Benefits</Link></li>        
                    </ul>  
                </div>
                <Image
                 src={neoncar}
                 alt='mclaren background picture'
                 layout='responsive'/>
            </header>
            <div>{children}</div>
            <footer  className='w-full bg-slate-800'>
                <div className='flex lg:flex-row md:flex-row flex-col px-6 py-2 justify-between items-center mx-auto max-w-7xl'>
                    <div><p className='text-center'>CAR FOR YOU ©2023 All rights reserved</p></div>
                    <div><p>German | French | Italian | English</p></div>
                </div>
            </footer>
        </>
    );
};

export default Layout;