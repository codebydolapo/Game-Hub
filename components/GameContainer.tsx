import styles from "../styles/gamecontainer.module.css";
import Featured from "./Featured";
import featuredData from "../data/featuredData";
import popularData from "../data/popularData";
import Popular from "./Popular";
import Latest from "./Latest";

interface Props {
  image: string;
  title: string;
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
        className={`w-full min-h-1/2 h-auto flex justify-center items-start md:flex-row xsm:flex-col`}
      >
        <div className={`md:w-[65%] h-full xsm:w-[100%]`}>
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
              className={`w-full min-h-[20em] h-auto flex md:flex-wrap items-start md:flex-row md:justify-around xsm:flex-col`}
            >
              {popularData.map(
                ({ title, description, image, rating }: Props) => {
                  return (
                    <Popular
                      title={title}
                      description={description}
                      image={image}
                      rating={rating}
                      key={title}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div
          className={`md:w-[35%] min-h-1/2 h-auto flex flex-col xsm:w-[100%] items-start justify-center`}
        >
          <div
            className={`w-full h-10 flex flex-row items-center justify-between px-2`}
          >
            <h1
              className={`text-white text-lg font-light tracking-wider bg-[#0000005f]`}
            >
              Latest Games
            </h1>
            <h3 className={`text-xs font-bold text-xs text-[#ff4500]`}>
              see all
            </h3>
          </div>
          <div className={`w-full min-h-1/2 h-auto flex flex-col items-center`}>
            {popularData.map(({ title, description, image, rating }: Props) => {
              return (
                <Latest
                  title={title}
                  description={description}
                  image={image}
                  rating={rating}
                  key={title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameContainer;
