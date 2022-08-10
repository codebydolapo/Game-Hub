import { DownloadIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";


interface Props {
  image: string;
  title: string;
  description: string;
  rating?: any;
}

function Latest({title, description, image, rating}: Props) {
  return (
    <div
      className={`md:w-[100%] h-[4em] my-2 flex flex-row items-center justify-around border-[1px] border-[#ffffff7f] rounded-md xsm:w-[95%]`}
    >
      <img
        className={`w-[3em] h-[3em] rounded-full`}
        src={image}
        alt=""
      />
      <div
        className={`w-[12em] h-full px-1 flex flex-col items-start justify-around`}
      >
        <h1 className={`text-base font-light text-white`}>{title}</h1>
        <h3 className={`text-[0.5em] text-white`}>
          {description}
        </h3>
        <div
          className={`h-[30%] w-full flex flex-row items-center justify-start`}
        >
          <StarIcon className={`stroke-[#ffff00] fill-[#ffff00] w-3`} />
          <h5 className={`text-white text-[0.5em] font-bold font-light`}>{rating}</h5>
        </div>
      </div>
      <div className={`w-[2em] h-full flex items-center justify-center`}>
        <DownloadIcon className={`stroke-white w-6`} />
      </div>
    </div>
  );
}

export default Latest;
