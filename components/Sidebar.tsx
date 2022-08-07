import {
  AdjustmentsIcon,
  SearchIcon,
  PuzzleIcon,
  UserGroupIcon,
  BellIcon,
  DownloadIcon,
  UserCircleIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import styles from "../styles/sidebar.module.css";

function Sidebar() {
  return (
    <div className={`h-full w-1/5 flex flex-col ${styles.sidebar}`}>
      <div
        className={`h-[10%] w-full flex justify-start items-center border-0 border-b-2 border-white `}
      >
        <h1 className={`text-white font-extrabold text-2xl`}>GAME HUB</h1>
      </div>
      <div className={`h-[90%]`}>
        <div
          className={`w-full h-3/4 overflow-x-hidden overflow-y-scroll flex flex-col items-center ${styles.sidebarMenu}`}
        >
          <div
            className={`w-full h-10 flex items-center justify-start pl-2 my-3 cursor-pointer`}
          >
            <AdjustmentsIcon className={`stroke-white w-6 `} />
            <h1 className={`text-white font-light ml-2 text-xl `}>Dashboard</h1>
          </div>

          <div
            className={`w-full h-10 flex items-center justify-start pl-2 my-3 cursor-pointer`}
          >
            <SearchIcon className={`stroke-white w-6 `} />
            <h1 className={`text-white font-light ml-2 text-xl`}>Search</h1>
          </div>

          <div
            className={`w-full h-10 flex items-center justify-start pl-2 my-3 cursor-pointer`}
          >
            <PuzzleIcon className={`stroke-white w-6 `} />
            <h1 className={`text-white font-light ml-2 text-xl`}>My Games</h1>
          </div>

          <div
            className={`w-full h-10 flex items-center justify-start pl-2 my-3 cursor-pointer`}
          >
            <UserGroupIcon className={`stroke-white w-6`} />
            <h1 className={`text-white font-light ml-2 text-xl`}>Friends</h1>
          </div>

          <div
            className={`w-full h-10 flex items-center justify-start pl-2 my-3 cursor-pointer`}
          >
            <BellIcon className={`stroke-white w-6 `} />
            <h1 className={`text-white font-light ml-2 text-xl`}>
              Notifications
            </h1>
          </div>

          <div
            className={`w-full h-10 flex items-center justify-start pl-2 my-3 cursor-pointer`}
          >
            <CogIcon className={`stroke-white w-6 `} />
            <h1 className={`text-white font-light ml-2 text-xl`}>Settings</h1>
          </div>

          <div
            className={`w-full h-10 flex items-center justify-start pl-2 my-3 cursor-pointer`}
          >
            <DownloadIcon className={`stroke-white w-6 `} />
            <h1 className={`text-white font-light ml-2 text-xl`}>Download</h1>
          </div>

          <div
            className={`w-full h-10 flex items-center justify-start pl-2 my-3 cursor-pointer`}
          >
            <UserCircleIcon className={`stroke-white w-6 `} />
            <h1 className={`text-white font-light ml-2 text-xl`}>Profile</h1>
          </div>
        </div>

        <div
          className={`w-full h-1/4 overflow-x-hidden overflow-y-scroll flex flex-col items-center justify-end ${styles.sidebarMenu}`}
        >
          <div
            className={`w-full h-10 flex items-center justify-start mb-7 pl-2 my-3 cursor-pointer`}
          >
            <LogoutIcon className={`stroke-white w-5 `} />
            <h1 className={`text-white font-light ml-2 text-xl`}>Logout</h1>
          </div>
        </div>

        <div className={`w-full h-1/2`}></div>
      </div>
    </div>
  );
}

export default Sidebar;
