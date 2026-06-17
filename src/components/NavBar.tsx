import { logo1 } from '../assets/assets'
import { Menu } from 'lucide-react'
const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-5 sm:px-15 h-20 mt-1 sticky
top-0
z-50
bg-[#F8F4EF]/90
backdrop-blur-md
border-b
border-[#E8D9CA]'>
        <img src={logo1} className='h-30 lg:h-40 w-auto object-contain' />
        <ul className='hidden  md:flex gap-6 lg:flex gap-8 text-lg text-[#5C4A3D] font-medium ft-mono'>
        <a href="#home">Home</a>
        <a href="#home">About Us</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact Us</a>
        </ul>
        <div className='hidden md:block bg-[#A8642A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#8F5422] transition-all duration-300 cursor-pointer'>Submit Manuscript</div>
        <Menu size={40} className="md:hidden text-[#3B2414] cursor-pointer bg-[#C29269] rounded-lg px-2"/>
    </div>
  )
}

export default NavBar