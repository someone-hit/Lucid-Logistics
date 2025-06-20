import React from 'react'
import Studentcard from '../components/Studentcard'

const Results = () => {
  return (
    <section className='container'>
        <div className='mt-[100px]'>
            <h1 className='font-[700] uppercase text-[40px] text-black flex justify-center text-center'>birinchi va o’rta osiyodagi eng yirik logistika akademiyasimiz</h1>
            <h4 className='font-normal text-[22px] text-black flex justify-center text-center pt-[24px]'>Bozorda 5 yilda beri ishlab kelamiz. Faoliyatimiz davomida o’zimizning HR va Konsalting platformamizni yaratdik</h4>
            <Studentcard />
        </div>
    </section>
  )
}

export default Results
