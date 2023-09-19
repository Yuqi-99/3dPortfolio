// import { ReactComponent as Logo } from "../assets/logo.svg";

import { navLinks } from "../constants";

const Navbar = () => {
  const navlink = navLinks.map((links) => {
    return (
      <p
        key={links.id}
        className="cursor-pointer font-mono text-[#AAA6C3] text-[18px] hover:text-white"
      >
        {links.title}
      </p>
    );
  });
  return (
    <div className="flex justify-between items-center h-[60px] px-10">
      <div className="flex items-center">
        <img
          src="src/assets/logo.svg"
          alt="logo"
          className="w-[30px] h-[30px]"
        />
        <p className="font-extrabold ml-2 font-mono text-[18px]">
          {" "}
          | Javascript Mastery
        </p>
      </div>
      <div className="flex justify-end">
        <div className="flex justify-between items-center w-[250px]">
          {navlink}
        </div>
      </div>
    </div>
  );
};

export { Navbar };
