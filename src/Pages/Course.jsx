import quit from '../assets/svgs/quit.svg'
import Button from '../components/Button';
import Coursecard from '../components/coursecard';
import circles from '../assets/svgs/circles.svg' 
import chart from '../assets/svgs/chart.svg'

const Course = () => {
  return (
    <section className="container">
      <div className="mt-[60px] relative">
        <div className="flex justify-center text-center">
          <h1 className="font-bold text-[40px] text-black uppercase">
            bu kurs siz uchun, agar:
          </h1>
        </div>
        <div className="hidden lg:absolute lg:flex lg:right-12 lg:top-11">
          <img src={quit} alt={quit}/>
        </div>
        <Coursecard />
      <div className='flex justify-center mt-[70px]'>
        <Button text={'ha, bu kurs men uchun'} />
      </div>
      <div className='hidden lg:absolute lg:flex lg:bottom-[100px] lg:right-0'>
        <img src={circles} alt={circles}/>
      </div>
      <div className='flex justify-center text-center mt-[80px] lg:mt-[215px]'>
        <h1 className='font-bold text-[36px] w-[890px] text-black'>Sizda hozir <span className='text-darkblue'>harakat qilish kerak</span> degan tushuncha mavjud, ammo aniq nima qilish kerakligini bilmaysiz </h1>
      </div>
      <div className='hidden lg:absolute lg:flex -bottom-[110px] left-0'>
        <img src={chart} alt={chart}/>
      </div>
      </div>
    </section>
  );
};

export default Course;
