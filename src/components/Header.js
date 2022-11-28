import React from 'react';
import Image from "next/image";
import { SearchIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

function Header(props) {
    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="flex items-center mt-2 flex-grow sm:flex-grow-0">
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className='cursor-pointer'
                    />
                </div>

                <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-poiner bg-yellow-400 hover:bg-yellow-500">
                    <input
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
                        type="text"
                    />
                    <MagnifyingGlassIcon className="h-12 p-4" />
                </div>

                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div>
                        <p>I need a durag</p>
                        <p>Account & Lists</p>
                    </div>

                    <div>
                        <p>Returns</p>
                        <p>& orders</p>
                    </div>
                    <div>
                        <ShoppingCartIcon className="h-10" />
                        <p>Basket</p>
                    </div>
                </div>

            </div>
            <div>

            </div>
        </header>
    );
}

export default Header;