import Navbar from './Navbar'
import GameContainer from './GameContainer'
import styles from '../styles/mainbody.module.css'

function Mainbody(){
    return <div className={`min-h-full h-auto md:w-5/6 flex flex-col overflow-x-hidden overflow-y-scroll xsm:w-full ${styles.mainbody}`}>
        <Navbar/>
        <GameContainer/>
    </div>;
}

export default Mainbody