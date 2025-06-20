import React from "react";
import student from "../assets/images/student.png";

const Studentcard = () => {
  const student_card = [
    {
      img: student,
      heading: "mr. Ali:",
      desc: "6+ yillik tajriba, 300 dan ziyod o’quvchi, AQSh’ning  logististika kompaniyasida dispetcher",
    },
    {
      img: student,
      heading: "mr. CJ:",
      desc: "4+ yillik tajriba, 100 dan ziyod o’quvchi, AQSh’ning  logististika kompaniyasida dispetcher",
    },
    {
      img: student,
      heading: "mr. Paul:",
      desc: "6+ yillik tajriba, 400 dan ziyod o’quvchi, AQSh’ning  logististika kompaniyasida dispetcher",
    },
    {
      img: student,
      heading: "mr. Steve:",
      desc: "8+ yillik tajriba, 400 dan ziyod o’quvchi, AQSh’ning  logististika kompaniyasida dispetcher",
    },
  ];

  return (
    <section className="container">
      <div className="flex justify-center">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 md:space-x-5 md:space-y-5 lg:space-x-5 mt-[30px] md:mt-[34px]  lg:mt-[43px]">
          {student_card.map((item, index) => {
            return (
              <div className="w-[287px] h-[354px] hover:shadow-2xl" key={index}>
                <div className="flex justify-center">
                  <img src={item.img} alt={item.img} />
                </div>
                <div className="pt-[23px] flex justify-center">
                  <h3 className="font-[700] text-[24px] text-black">
                    {item.heading}
                  </h3>
                </div>
                <div className="pt-[12px] flex justify-center text-center">
                  <h5 className="font-[400] text-[22px] text-black">
                    {item.desc}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Studentcard;
