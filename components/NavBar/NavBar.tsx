import { Link } from 'next-view-transitions'

const NavBar = () => (
  <nav className="bg-gray-200 bg-opacity-50 fixed w-full z-20 top-0 start-0 md:h-20">
    <ul className="flex items-center justify-center mx-auto p-4">
      <li className="py-2 px-3 text-black md:text-2xl hover:text-blue-700 cursor-pointer">
        <Link href="/">Home</Link>
      </li>
      <li className="py-2 px-3 text-black md:text-2xl hover:text-blue-700 cursor-pointer">
        <Link href="/iam">IAM</Link>
      </li>
      <li className="py-2 px-3 text-black md:text-2xl hover:text-blue-700 cursor-pointer">
        <Link href="/feedback">Feedback</Link>
      </li>
      {/* <li className='py-2 px-3 text-black md:text-2xl hover:text-blue-700 cursor-pointer'>
                <Link href='/kalenders'>Galerijen</Link>
            </li> */}
      <li className="py-2 px-3 text-black md:text-2xl hover:text-blue-700 cursor-pointer">
        <Link href="/fotos">{`Foto's`}</Link>
      </li>
      <li className="py-2 px-3 text-black md:text-2xl hover:text-blue-700 cursor-pointer">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default NavBar
