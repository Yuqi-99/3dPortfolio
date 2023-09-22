// import { House } from "src/components/canvas/House";

import { House } from "src/components/canvas/House";

/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute flex w-full md:max-w-[70%] px-4">
        <div className="min-w-[20px] w-[20px] h-[20px] bg-blue-800 rounded-full relative flex justify-center mr-4">
          <div className="w-[4px] h-[200px] blue-gradient absolute top-4"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            <p className="text-[50px] font-extrabold mr-4 text-white">
              Hi, I'm
            </p>
            <p className="text-[50px] font-extrabold text-blue-800">Yuqi</p>
          </div>
          <p className="text-[28px] font-normal mt-6 leading-10">
            I develop 3D visuals, user interfaces and web applications
          </p>
        </div>
      </div>
      <House />
      <div className="w-full absolute bottom-0">
        <div className="h-[80px] w-[40px] border-4 border-solid border-white rounded-full flex justify-center mx-auto">
          <div className="w-[15px] h-[15px] rounded-full bg-white moving-item"></div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
