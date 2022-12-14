import { SearchIcon } from "@heroicons/react/outline";
import { BellIcon } from "@heroicons/react/Solid";

function Navbar() {

  
  

  return (
    <div className={`w-full h-[50px] flex flex-row`}>
      <div className={`md:w-1/2 h-full flex justify-start items-center pl-2 xsm:w-[70%]`}>
        <div
          className={`md:w-3/4 h-4/6 border-[0.5px] border-[#ffffff7f] rounded-md flex flex-row justify-start items-center px-2 xsm:w-full`}
        >
          <SearchIcon
            className={`stroke-[#ffffff3f] w-6 cursor-pointer mr-2`}
          />
          <input
            className={`w-11/12 h-full bg-inherit border-0 outline-0 pl-2 text-white`}
            type="text"
          />
        </div>
      </div>
      <div
        className={`md:w-1/2 h-full flex justify-start items-center flex flex-row justify-end items-center xsm:w-[30%]`}
      >
        <div
          className={`w-8 h-8 relative cursor-pointer mr-3 flex items-center justify-center md:block md:visible xsm:invisible xsm:hidden`}
        >
          <BellIcon className={`stroke-white w-7 fill-[#ffffff] `} />
          <div
            className={`bg-[#cc5c5c] top-[1px] right-[1px] flex items-center justify-center h-[15px] w-[15px]  rounded-full text-white absolute`}
          >
            <span className={`text-[11px] text-bold`}>20</span>
          </div>
        </div>
        <div
          className={`w-[250px] h-full flex flex-row justify-end items-center`}
        >
          <img
            src="/images/dp.jpg"
            alt=""
            className={`md:w-[30px] md:h-[30px] rounded-full mx-2 border-2 border-[#ffff00] xsm:w-[40px] xsm:h-[40px]`}
          />
          <div
            className={`w-[200px] h-full md:flex flex-col items-start justify-center md:visible xsm:invisible xsm:hidden`}
          >
            <h1 className={`text-sm text-white font-bold`}> Bashorun Dolapo</h1>
            <h2 className={`text-xs text-white`}>bashorun115@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
