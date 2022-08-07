import styles from "../styles/featured.module.css";

interface Props{
  image: string,
  title: string,
  description: string
}

function Featured({image, title, description}: Props) {

  return (
    <div
      className={`h-[16em] min-w-[35em] w-[35em] mx-5 rounded-xl relative ${styles.featured}`}
    >
      <img
        src={image}
        alt=""
        className={`w-full h-full rounded-xl`}
      />

      <div
        className={`w-1/2 h-full flex flex-col justify-around items-center absolute top-0 right-0`}
      >
        <div className={`w-full h-1/3 flex items-center justify-center`}>
          <h1 className={`text-white font-extrabold text-4xl tracking-wide`}>
            {title}
          </h1>
        </div>
        <div className={`w-full h-1/3 bg-[#0000003f] pl-2 rounded-lg`}>
          <p className={`text-white text-base font-light`}>
            {description}
          </p>
        </div>
        <div
          className={`w-full h-1/3 flex flex-row justify-around items-center`}
        >
          <button className={`w-[46%] h-[35px] text-white bg-[#ff4500] rounded-md`}>
            Download
          </button>
          <button className={`w-[46%] h-[35px] text-white border-[1px] border-white rounded-md`}>
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
