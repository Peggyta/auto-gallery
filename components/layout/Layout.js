import React from 'react';
import Link from 'next/link';
import Logo from '../icons/Logo';
import Menu from '../icons/Menu';
import Image from 'next/image';
import neoncar from '../../public/assets/neoncar.jpg';


const Layout = ({children}) => {
    return (
        <>
            <header className='w-full'>
                <div className='max-w-7xl mt-3 flex justify-between items-center px-6  mx-auto'>
                    <ul className='flex pt-2 gap-6'>
                        <li><Link className='flex font-semibold links' href='/'>
                            <Logo className='links' />
                            CAR FOR YOU 
                        </Link></li>
                        <li className='hidden lg:block md:block'><Link className='links' href='/cars'>Cars</Link></li>
                        <li className='hidden lg:block md:block'><Link className='links' href='/'>Buy</Link></li>
                        <li className='hidden lg:block md:block'><Link className='links' href='/'>Sell</Link></li>
                        <li className='hidden lg:block md:block'><Link className='links' href='/'>Service & Benefits</Link></li>        
                    </ul> 
                    <div className='md:hidden lg:hidden'>
                        <Menu />
                    </div> 
                </div>
                <Image
                    src={neoncar}
                    alt='mclaren background picture'
                    layout='responsive'
                />  
            </header>
            <div>{children}</div>
            <footer  className='w-full mt-12 bg-slate-800'>
                <div className='text-sm mx-auto max-w-7xl py-2'>
                    <p className='text-center'>CAR FOR YOU ©2023 All rights reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Layout;