import Link from "next/link"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='fixed inset-0'>
            <div className="fixed bottom-0 left-0 right-0 flex md:flex-row flex-col items-center justify-between px-4 py-6 bg-gray-100">
                <div className='text-black md:text-xl flex items-center justify-center w-full'>
                    <p className="pr-1">Copyright {currentYear} - Independent Art Magazine -</p><Link className="hover:text-blue-700 cursor-pointer" target="_blank" href='https://cv-styn-vercauteren.vercel.app/'>Site by Styn Vercauteren</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer