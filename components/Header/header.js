export default function Header() {
    return (
        <header className="absolute w-full z-40 px-4 bg-gray-100 border-2 border-white">
            <div className="grid grid-flow-col grid-cols-6 py-4">
                <div className=" col-span-3 w-50 ml-10 text-3xl  max-h-full italic font-serif font-bold text-black cursor-pointer">
                    Wildan
                </div>
                <ul className="col-span-4 flex justify-evenly px-3 items-center uppercase italic text-sm font-semibold">
                    <li className="hover:scale-125 transition-all duration-75 ease-out cursor-pointer">Home</li>
                    <li className="hover:scale-125 transition-all duration-75 ease-out cursor-pointer">About me</li>
                    <li className="hover:scale-125 transition-all duration-75 ease-out cursor-pointer">Blog</li>
                    <li className="hover:scale-125 transition-all duration-75 ease-out cursor-pointer">Contact</li>
                </ul>
            </div>
        </header>
    )
}
