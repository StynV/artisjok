const NavBar = ({ handleNavBarClick }: { handleNavBarClick: (index: number) => void; }) => (
    <nav className='bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200'>
        <ul className='flex items-center justify-center mx-auto p-4'>
            <li onClick={() => handleNavBarClick(0)} className='py-2 px-3 text-black hover:text-blue-700 cursor-pointer'>Home</li>
            <li onClick={() => handleNavBarClick(1)} className='py-2 px-3 text-black hover:text-blue-700 cursor-pointer'>Welkom</li>
            <li onClick={() => handleNavBarClick(2)} className='py-2 px-3 text-black hover:text-blue-700 cursor-pointer'>Kalender</li>
            <li onClick={() => handleNavBarClick(3)} className='py-2 px-3 text-black hover:text-blue-700 cursor-pointer'>contact</li>
        </ul>
  </nav>
)

export default NavBar