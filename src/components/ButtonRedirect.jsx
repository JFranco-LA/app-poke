import { Link } from "react-router-dom";

const ButtonRedirect = ({name, secundary, direction}) => {
  return (
    <Link to={`/${direction}`} className="redirect-home">
      <div className="relative flex justify-center group transition-all duration-700 ease-in-out">
        <button className="z-20 bg-white h-12 w-36 rounded-2xl font-bold text-2xl">
          {name}
        </button>
        <button className="absolute items-end justify-center -bottom-7 z-10 h-11 font-bold text-lg px-7 w-36 text-white hidden rounded-b-3xl group-hover:bg-[#0000007f] group-hover:flex">
          {secundary}
        </button>
      </div>
    </Link>
  );
};

export default ButtonRedirect;
