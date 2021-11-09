export default function Header() {
    return (
        <header className="absolute w-full z-40 px-4 bg-gray-100 border-2 border-white">
            <div className="grid grid-flow-col grid-cols-6 py-4">
                <div className=" col-span-3 w-50 ml-10 text-3xl  max-h-full italic font-serif font-bold text-black cursor-pointer">
                    Wildan
                </div>
                <div className="md:hidden col-span-3 flex px-3 justify-end cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 hover:scale-125 duration-75 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <ul className="hidden col-span-4 md:flex md:justify-evenly px-3 items-center uppercase italic text-sm font-semibold">
                    <li className="md:hover:scale-125 md:transition-all md:duration-75 md:ease-out cursor-pointer">Home</li>
                    <li className="md:hover:scale-125 md:transition-all md:duration-75 md:ease-out cursor-pointer">About me</li>
                    <li className="md:hover:scale-125 md:transition-all md:duration-75 md:ease-out cursor-pointer">Blog</li>
                    <li className="md:hover:scale-125 md:transition-all md:duration-75 md:ease-out cursor-pointer">Contact</li>
                </ul>
            </div>
        </header>
    )
}
