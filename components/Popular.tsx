import styles from '../styles/popular.module.css'
import {DownloadIcon} from '@heroicons/react/outline'
import {StarIcon} from '@heroicons/react/solid'


interface Props{
  title: string,
  description: string,
  image: string,
  rating: string
}

function Popular({title, description, image, rating}: Props) {
  return (
    <div
      className={`relative md:min-w-[15em] md:w-[15em] md:min-h-[15em] md:h-[15em] rounded-xl mx-2 md:my-2 xsm:min-w-[95vw] xsm:w-[95vw] xsm:min-h-[95vw] xsm:h-[95vw] xsm:my-4 ${styles.popular}`}
    >
      <img className={`w-full h-full rounded-xl`} src={image} alt="" />
      <div
        className={`absolute w-full h-1/2 rounded-xl bottom-0 left-0 flex flex-col items-start justify-around px-2 py-2 ${styles.detailContainer}`}
      >
        <h1 className={`text-white md:text-lg font-light xsm:text-3xl`}>{title}</h1>
        <div className={`w-full h-[50%]`}>
          <p className={`text-white md:text-sm font-light xsm:text-base`}>{description}</p>
        </div>
        <div className={`w-full h-[20%] flex justify-between items-center`}>
          <DownloadIcon className={`stroke-white w-6`} />
          <div className={`w-20 flex flex-row items-center justify-center`}>
            <StarIcon className={`stroke-[#ffff00] fill-[#ffff00] w-5`} />
            <p className={`text-white text-base font-light`}>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
