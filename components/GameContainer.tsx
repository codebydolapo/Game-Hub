import styles from "../styles/gamecontainer.module.css";
import Featured from "./Featured";
import featuredData from "../data/featuredData";
import popularData from "../data/popularData";
import Popular from './Popular'

interface Props {
  image: string ;
  title: string ;
  description: string;
  rating?: any;
}

function GameContainer() {
  return (
    <div className={`w-full ${styles.gamecontainer}`}>
      <div
        className={`w-full h-[18em] flex flex-row items-center overflow-y-hidden overflow-x-scroll ${styles.featuredContainer}`}
      >
        {featuredData.map(({ title, image, description }: Props) => {
          return (
            <Featured
              title={title}
              image={image}
              description={description}
              key={title}
            />
          );
        })}
      </div>
      <div
        className={`w-full min-h-1/2 h-auto flex flex-row`}
      >
        <div className={`w-4/6 h-full `}>
          <div
            className={`w-full h-[4em] flex flex-col justify-around items-start`}
          >
            <h1
              className={`text-white text-lg font-light ml-2 tracking-wider bg-[#0000005f]`}
            >
              GAME CATEGORIES
            </h1>
            <div
              className={`w-full h-[2em] flex flex-row items-center overflow-y-scroll overflow-x-scroll ${styles.choiceContainer}`}
            >
              <button
                className={` h-auto text-xs text-white bg-[#ff4500] rounded-sm py-1 px-3 mx-1`}
              >
                Sports
              </button>
              <button
                className={` h-auto text-xs text-white rounded-sm py-1 px-3 mx-1`}
              >
                RPG
              </button>
              <button
                className={` h-auto text-xs text-white rounded-sm py-1 px-3 mx-1`}
              >
                Puzzles
              </button>
              <button
                className={` h-auto text-xs text-white rounded-sm py-1 px-3 mx-1`}
              >
                Warcraft
              </button>
              <button
                className={` h-auto text-xs text-white rounded-sm py-1 px-3 mx-1`}
              >
                18+
              </button>
            </div>
          </div>
          <div className={`w-full min-h-[20em] h-auto`}>
            <div
              className={`w-full h-[2em] flex flex-col justify-around items-start `}
            >
              <h1
                className={`text-white text-base font-bold ml-2 tracking-wider bg-[#0000005f]`}
              >
                Popular Games
              </h1>
            </div>
            <div
              className={`w-full min-h-[20em] h-auto flex flex-wrap items-start justify-around`}
            >
              {popularData.map(({title, description, image, rating}: Props)=>{
                return <Popular
                  title = {title}
                  description = {description}
                  image = {image}
                  rating = {rating}
                  key = {title}
                />
              })}
                
            </div>
          </div>
        </div>
        <div className={`w-2/6 h-full border-2 border-grey`}></div>
      </div>
    </div>
  );
}

export default GameContainer;
