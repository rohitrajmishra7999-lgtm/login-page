import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ArrowRight } from 'lucide-react';
const courses = [
{
image:"/s1.jpg",
name: " React course",
price: 3000
},
{
image:"/s1.jpg",
name: " Node course",
price: 3999
},
{
image:"/s1.jpg",
name: " Express course",
price: 3999
},
{
image:"/s1.jpg",
name: " Express course",
price: 3999
},
{
image:"/s1.jpg",
name: " Express course",
price: 3999
},
{
image:"/s1.jpg",
name: " Express course",
price: 3999
},
{
image:"/s1.jpg",
name: " Express course",
price: 3999
}

]
const Homepages = () => {
  return (
    <div>
      <div className='h-[500px] animate__animated animate__fadeIn bg-gray-200 '>
          <Swiper pagination={true} modules={[Pagination]} className="w-full h-full">
        <SwiperSlide>
          <div className='h-full bg-linear-to-r from-orange-300 to-blue-200 '>
            <div className='w-10/12 mx-auto h-full grid grid-cols-2 gap-8' >
            <div className='flex  flex-col justify-center  h-full  '>
              <h1 className='text-5xl font-bold'>
                REACT COURSE FOR BEGINNERS 
              </h1>
              <p className='text-3xl font-semi-bold mt-2' > learn to design a website</p>
              <p className='mt-3 text-black/70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum rem sit nemo? Quae fugiat incidunt, officia ea doloremque quaerat explicabo repellendus doloribus corporis fuga possimus eius commodi, a optio!
              </p>
              <div className='flex gap-4 mt-5'>
                <button className='bg-blue-700 flex items-center justify-center gap-1  text-white rounded p-2 font-medium text-bold rounded-lg hover:scale-115 tansition duration-300 active:scale-80 shadow-lg'>
                 < ArrowRight className='w-4 h-4'/>
                  Learn More
                </button>
               <button className='bg-black/70 text-white rounded p-2 font-medium text-bold rounded-lg hover:scale-115 tansition duration-300 active:scale-80 shadow-lg'>
                    watch Video
                </button>
              </div>
            </div>
            <div >
              <img src='/s1.jpg' className='w-full h-full object-cover'/>
            </div>
            </div>
          </div>
          </SwiperSlide>
       
      
        <SwiperSlide>
          <div className='h-full bg-linear-to-r from-orange-300 to-blue-200 '>
            <div className='w-10/12 mx-auto h-full grid grid-cols-2 gap-8' >
            <div className='flex  flex-col justify-center  h-full  '>
              <h1 className='text-5xl font-bold'>
                NODE COURSE FOR BEGINNERS 
              </h1>
              <p className='text-3xl font-semi-bold mt-2' > learn to design a website</p>
              <p className='mt-3 text-black/70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum rem sit nemo? Quae fugiat incidunt, officia ea doloremque quaerat explicabo repellendus doloribus corporis fuga possimus eius commodi, a optio!
              </p>
              <div className='flex gap-4 mt-5'>
                <button className='bg-rose-700 flex items-center justify-center gap-1  text-white rounded p-2 font-medium text-bold rounded-lg hover:scale-115 tansition duration-300 active:scale-80 shadow-lg'>
                 < ArrowRight className='w-4 h-4'/>
                  Learn More
                </button>
               <button className='bg-black text-white rounded p-2 font-medium text-bold rounded-lg hover:scale-115 tansition duration-300 active:scale-80 shadow-lg'>
                    watch Video
                </button>
              </div>
            </div>
            <div >
              <img src='/OIP.jpg' className='w-full h-full object-cover'/>
            </div>
            </div>
          </div>
          </SwiperSlide>
       
      </Swiper>
      </div>
      <div className='p-24 bg-gray-200 '>
      <div className='text-center'>
        <h1 className='text-2xl font-bold mx-auto'>
          Recomended Courses 
        </h1>
        <p className='text-lg '>
          choose a course as per your need and industry demand Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore sed, itaque nostrum a labore ad explicabo ea velit, tenetur in repellat ab. Nemo veniam unde corporis autem fugit dicta!
        </p>
      </div>
      <div className='grid grid-cols-3 gap-8 mt-16'>
        {

courses.map((item,index)=>(
<div key={index} className='bg-white rounded-lg shadow-lg '>
  <img src={item.image} className='w-full h-[180px] object-cover rounded-t-lg '/>
  <div className='px-4 py-2'>
    <h1 className='text-lg font-medium '> {item.name}</h1>

<p className='text-black/80'> { item.price}
   </p>
   <button className= 'bg-linear-to-r from-sky-600 to bg-indigo-400 text-white font-medium py-2.5  w-full rounded-lg hover:scale-105 transition duration-300 active:scale-75'>
    Enroll Now
   </button>
</div>
</div>
))
        }
      </div>
      </div>
      <div className='p-24 bg-white text-center w-10/12 mx-auto '>
    <h1 className='text-5xl font-bold'>
                FAQ 
              </h1>
       <p className='mt-3 text-black/70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum rem sit nemo? Quae fugiat incidunt, officia ea doloremque quaerat explicabo repellendus doloribus corporis fuga possimus eius commodi, a optio!
              </p>
              <div className='w-10/12 mt-16 mx-auto  space-y-8'>
                {
                  Array(4).fill(0).map((item,index)=>(

 <div key={index} className='border border-gray-300 rounded-2xl flex flex-col '>
                  <button className='bg-linear-to-t from-sky-500 to-pink-500 flex items-center gap-2  text-white  px-8 py-2.5 rounded-lg  text-left p-14 font-medium hover:scale-105 transition duration-300 active:scale-75 '> 
                    how to purchases?
                  </button>
              
                <div className='p-4  border-gray-300 '>
                  <p className='text-left'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laudantium cum illo debitis dolores similique quisquam, impedit autem modi sit rerum facilis iste explicabo ut ullam culpa nostrum quasi reprehenderit.
                  </p>
                </div>
                </div>

                  ))
                }
              </div>
      </div>

      
    </div>
  )
}

export default Homepages
