import styles from './About.module.css'
import { useState } from 'react'
import arrow from '../../assets/arrow.png'

export default function About() {

    const [click, setClick] = useState(false);

    function handleClick() {
        setClick(!click);
        // console.log(click)
    }

    return(
        <>
            <div className={styles.mainBox}>

                <div className={styles.arrowBox}>
                    <img className={styles.arrowImg} src={arrow}/>
                </div>

                <div className={styles.aboutBox}>
                    
                </div>
            </div>

        </>
    )
}