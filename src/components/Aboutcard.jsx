import React from "react";

const Aboutcard = () => {
  const about_card = [
    {
      number: 1,
      title: "Amaliy darslar",
      desc: "18 ta amaliy va nazariy darslar CV yozish haqidagi dars JOB interview ga ega bo’lasiz",
    },
    {
      number: 2,
      title: "Ingliz tili",
      desc: "O‘qish davomida siz o’zingizning ingliz tili darajangizni ham oshirish imkoniyatiga ega bo’lasiz",
    },
    {
      number: 3,
      title: "Amalyiot",
      desc: "Tajribali ustozlar, kursdan olgan bilimlaringizni amaliyotda qo’llashga yordam berishadi",
    },
    {
      number: 4,
      title: "Doimiy qo’llav quvatlash",
      desc: "Kurs jarayonida va kursdan so’ng ham sizni doimiy ravishda qo’llab-quvvatlab turuvchi “SUPPORT” jamoamiz bor",
    },
    {
      number: 5,
      title: "Sertifikat",
      desc: "Kurs so’ngida sizga maxsus sertifikat taqdim etiladi. Ushbu hujjat ish topishingizda yordam beradi",
    },
    {
      number: 6,
      title: "Ish bilan ta’minlash",
      desc: "Kursni muvaffaqiyatli yakunlagan o’quvchilarni ishga kirishiga bizning jamoa yordam beradi",
    },
  ];
  return (
    <section>
      <div className="flex justify-center">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:space-x-6 lg:space-y-6 lg:ml-[8px] mt-[20px] md:mt-[40px] lg:mt-[60px]">
          {about_card.map((item, index) => {
            return (
              <div
                key={index}
                className="lg:w-[394px] md:w-[394px] w-[360px] h-[187px] rounded-[10px] bg-darkwhite hover:shadow-2xl relative"
              >
                <div className="absolute left-3 top-1">
                  <span className="font-bold text-[30px] text-black">
                    {item.number}
                  </span>
                </div>
                <div className="flex justify-center pt-[30px]">
                  <h3 className="font-bold text-[24px] text-black">
                    {item.title}
                  </h3>
                </div>
                <div className="flex justify-center text-center pt-[12px] px-[20px]">
                    <h5 className="font-normal text-[18px] text-black">{item.desc}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Aboutcard;
