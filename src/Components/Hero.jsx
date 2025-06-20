import React from 'react';
import cap from '../assets/imgs/studentscap.png';
import dollar from '../assets/imgs/dollar.png';
import euro from '../assets/imgs/euro.png';
import circle from '../assets/imgs/blurCircle.png';
import boy from '../assets/imgs/boy.png';
import u from '../assets/imgs/u.png'
import plus from '../assets/imgs/plus.png'
import twoCircle from '../assets/imgs/twoCircle.png'
import Button  from '../Ui/Button';

const Hero = () => {
  const cards = [
    {
      id: 1,
      img: cap,
      title: '2000 dan ortiq o’quvchilarimiz natijaga erishishgan',
    },
    {
      id: 2,
      img: dollar,
      title: '1.5 oy ichida kursni tugatib 400$ dan daromad topa olasiz',
    },
    {
      id: 3,
      img: euro,
      title: 'Oylik daromad faqat o’zingizga bo’gliq bo’ladi ya`ni  siz',
    },
  ];

  return (
    <div className='pt-24 relative '>

      <img
        className='absolute -z-50 lg:top-10 lg:left-0 -right-0 -top-90   '
        src={circle}
        alt='background circle'
      />

      
      <img
        className='absolute -top-4 right-30 z-10 hidden lg:block  lg:w-auto'
        src={boy}
        alt='boy illustration'
      />
        
      <img className='absolute z-10 right-135 top-125 hidden lg:flex' src={u} alt="" />
      <img className='absolute z-10 right-15 -bottom-25 hidden lg:flex ' src={plus} alt="" />
      <img className='absolute z-10 right-15 hidden lg:flex' src={twoCircle} alt="" />

      <div className='container mx-auto relative z-50 px-4 sm:px-6 lg:px-8'>
        <h1 className='max-w-4xl w-full font-normal font-days-one leading-tight text-2xl sm:text-3xl md:text-4xl text-center md:text-left uppercase'>
          Truck dispatcher sohasini
          <span className='text-blue'>2 oy ichida</span> o’rganib oyiga{' '}
          <span className='text-blue'>600$</span> dan boshlab daromad topishni boshlang
        </h1>

        <ul className='flex flex-col sm:flex-row justify-center md:justify-start items-center sm:items-stretch gap-5 pt-10 sm:pt-14 flex-wrap'>
          {cards.map((item) => (
            <div>
            <li
              key={item.id}
              className='relative px-4 pb-6 pt-8 bg-[#F1F1F1] rounded-lg w-full sm:w-[250px] text-center sm:text-left'
            >
              <img
                className='z-50 absolute -top-6 lg:right-23! sm:absolute! right-35!'
                src={item.img}
                alt='icon'
              />
              <p className='w-full sm:w-[220px] mx-auto sm:mx-0 text-sm sm:text-base'>
                {item.title}
              </p>
            </li>

            </div>

            
          ))}
        </ul>

        <Button text='ariza qoldirish' className='bg-blue rounded-lg uppercase  lg:w-[292px] text-xl text-center font-bold text-white lg:px-14 py-7 mt-21'/>
      </div>
    </div>
  );
};

export default Hero;