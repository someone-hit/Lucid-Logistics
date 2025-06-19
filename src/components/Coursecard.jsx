import React from "react";
import first from "../assets/images/firstguy.png";
import second from "../assets/images/secondguy.png";
import third from "../assets/images/thirdguy.png";
import forth from "../assets/images/forthguy.jpg";

const Coursecard = () => {
  const course_card = [
    {
      img: first,
      desc: "Maoshi yuqori va qiziqarli ish topmoqchisiz. Eski ishingizdan charchagansiz va zerikkansiz",
    },
    {
      img: second,
      desc: "Hozirda ishingiz ham diplomingiz ham yo’q, lekin yuqori maoshli ishda ishlamoqchisiz",
    },
    {
      img: third,
      desc: "Ham o’qib ham ishlamoqchisiz, lekin shunga mos ish topa olmayapsiz",
    },
    {
      img: forth,
      desc: "Kelajakda biznesingizni ochmoqchisiz, ammo nimadan boshlashni bilmayapsiz",
    }
  ];

  return (
    <section className="container">
      <div className="flex justify-center">
      <div className="mt-[51px] flex flex-col items-center space-y-7 md:ml-[50px] md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 md:space-y-4 md:space-x-4 lg:-ml-[10px] lg:space-x-5 lg:-space-y-1">
        {course_card.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[287px] h-[284px] hover:shadow-2xl bg-white"
            >
              <div className="flex justify-center">
                <img className="h-[160px]" src={item.img} alt={item.img} />
              </div>
              <h5 className="font-normal text-center text-[18px] pt-[24px] text-black w-[288px]">
                {item.desc}
              </h5>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default Coursecard;
