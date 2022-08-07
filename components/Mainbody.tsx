import Navbar from './Navbar'
import GameContainer from './GameContainer'
import styles from '../styles/mainbody.module.css'

function Mainbody(){
    return <div className={`min-h-full h-auto w-4/5 flex flex-col overflow-x-hidden overflow-y-scroll ${styles.mainbody}`}>
        <Navbar/>
        <GameContainer/>
    </div>;
}

export default Mainbody