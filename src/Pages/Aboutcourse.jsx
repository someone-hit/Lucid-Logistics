import React from "react";
import Aboutcard from "../components/Aboutcard";
import Button from "../components/Button";
import big from "../assets/images/big.png";
import click from "../assets/svgs/click.svg";
import plus from "../assets/svgs/plus.svg";
import circles from "../assets/svgs/secondcircles.svg";

const Aboutcourse = () => {
  return (
    <section className="container">
      <div className="mt-[110px] lg:mt-[260px] relative">
        <div className="flex justify-center text-center">
          <h1 className="font-bold text-[40px] uppercase text-black">
            kursda nimalar bo’ladi?
          </h1>
        </div>
        <Aboutcard />
        <div className="flex justify-center mt-[60px]">
          <Button text={"KURSDA QATNASHISH"} />
        </div>
        <div className="mt-[100px] relative">
          <div className="absolute">
            <img src={big} alt={big} />
          </div>
        </div>
        <div className="mt-[85px]">
          <div className="hidden lg:flex lg:absolute lg:-bottom-230 lg:right-0">
            <img src={plus} alt={plus} />
          </div>
          <div className="absolute -bottom-156 md:-bottom-176 lg:-bottom-270 text-center">
            <h1 className="font-bold text-[36px] text-black">
              Kursni{" "}
              <span className="text-darkblue">
                bitirishingiz bilan AQSH’ning
              </span>{" "}
              barcha logistika kompaniyalarida{" "}
              <span className="text-darkblue">ishlashingiz mumkin</span>{" "}
            </h1>
          </div>
          <div className="hidden lg:flex lg:absolute lg:-bottom-292">
            <img src={circles} alt={circles} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutcourse;
