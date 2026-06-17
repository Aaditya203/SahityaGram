import { NavLink } from 'react-router-dom'
import { hero } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col justify-between sm:flex-row md:flex-row '>
      <div>
        {/* Left part */}
        <div className='w-full px-25 py-30'>
          <p className='text-7xl  font-cormorant font-bold text-[]'>Bringing Your <br /> Words To Life,</p>
          <p className='font-cormorant text-5xl py-2 text-[#A8642A] font-bold'>In Every Language
          </p>
         
          <div className='my-3 text-lg text-gray-600 font-semibold'>
             Sahityagram Prakashan is India's trusted publishing
 partner, transforming ideas into inspiring books
 that reach readers across languages.
          </div>

          <div className='flex flex-col sm:flex-row gap-4 pt-5'>
            <NavLink to={"/collection"}>
              <div className='flex items-center justify-center bg-[#A8642A] rounded-md px-9 py-3 whitespace-nowrap'>
              
                <div className=' text-white font-semibold'>Publish your Book</div>
              
              </div>
            </NavLink>
            <NavLink to={"/collection"}>
              <div className='flex items-center justify-center border-2 rounded-md px-4 py-2.5 border-[#A8642A] text-[#A8642A] font-semibold whitespace-nowrap'>
                Explore Services
              </div>
            </NavLink>
        </div>

        
      </div>
    </div>
      
       {/* right part */}
<div className="flex justify-center items-center relative">
  <img
    src={hero}
    alt=""
    className="w-full h-full object-cover"
    style={{
      maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
    }}
  />
</div>
    </div>
  )
}

export default Hero