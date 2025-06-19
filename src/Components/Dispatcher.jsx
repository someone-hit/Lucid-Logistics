import React from 'react'
import city from '../assets/imgs/city.png'

const Dispatcher = () => {
     const cards = [
        {
          id: 1,
          title: 'Bu kasbda sizning maoshingizning chegarasi yo’q  yani hohlagancha maosh olasiz',
        },
        {
          id: 2,
          title: 'Ish jaryonida, ingliz tilida gaplashish, muammolarni hal qilishni o’rganasiz va bemalol gapirasiz',
        },
        {
          id: 3,
          title: 'AQSH’ning har qanday logistika kompaniyasida ishlash imkoniga ega bo’lasiz',
        },
      ];
  return (
    <div className='container'>
        <h1 className='uppercase text-center font-normal text-4xl mt-36'>bu o’zi qanday kasb?</h1>

<div className='flex-row lg:flex items-center gap-8  pb-14 '>

        <div className='mt-18'>
              <h2 className='uppercase font-normal text-3xl'>Truck dispatcher  </h2>

                   <p className='font-normal text-xl w-full lg:w-[495px] mt-8 mb-6 text-[#222222]'>Yuk dispetcheri (AQSh) - transport kompaniyasining moliyaviy natijasiga bevosita ta'sir ko'rsatadigan xodim.</p>
                   <p className='font-normal text-xl w-full lg:w-[495px] text-[#222222]'>Dispetcherlar yuklarni tanlaydi, haydovchilarni boshqaradi, marshrutlarni quradi va tovarlarni etkazib berishni nazorat qiladi.</p>
        </div>

        <div>
            <img className='w-[499px] h-[240px] mt-10' src={city} alt="" />
        </div>
</div>

 <ul className='flex flex-col sm:flex-row justify-center md:justify-start items-center sm:items-stretch gap-8 pt-10 sm:pt-14 flex-wrap'>
          {cards.map((item) => (
            <div>
            <li
              key={item.id}
              className='relative px-4 pb-6 pt-8 bg-[#F1F1F1] rounded-lg  w-[322px] text-center sm:text-left'
            >
           
              <p className='w-full sm:w-[270px] text-center mx-auto sm:mx-0 text-sm sm:text-base'>
                {item.title}
              </p>
            </li>

            </div>

            
          ))}
        </ul>
    </div>
  )
}

export default Dispatcher