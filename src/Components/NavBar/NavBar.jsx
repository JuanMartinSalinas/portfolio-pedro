import styles from './NavBar.module.css';
import model from '../../../public/logos/3D_stroke.svg'
import photoshop from '../../../public/logos/Photoshop_stroke.svg'
import graphic from '../../../public/logos/Graph_stroke.svg'
import motion from '../../../public/logos/Motion_stroke.svg'
import develop from '../../../public/logos/Develop_stroke.svg'



export default function NavBar() {

    function filterModel() {
        alert("xd")
    }


    return(
        <>


            <div className={styles.mainBox}>
                <div className={styles.navbarBox}>

                <svg
                    className={styles.svgElem}
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 802 100"
>
                    <defs>
                        <clipPath id="clippath">
                            <rect x="100" y="20.1" width="594" height="65.6" fill="none" />
                        </clipPath>
                        
                        <linearGradient id="borderGradient">
                            <stop offset="20%" stopColor="orange" />
                            <stop offset="32%" stopColor="#8000ff" />
                            <stop offset="50%" stopColor="#ffe600" />
                            <stop offset="62%" stopColor="#0077ff" />
                            <stop offset="80%" stopColor="#1aff00" />
                        </linearGradient>

                        <linearGradient id="border3DModel" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="orange" />
                            <stop offset="100%" stopColor="#eb8b28" />
                        </linearGradient>
                        <linearGradient id="borderPhotoshop" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9920ce" />
                            <stop offset="100%" stopColor="#a94aad" />
                        </linearGradient>
                        <linearGradient id="borderGraphic" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#e1b03b" />
                            <stop offset="100%" stopColor="#aec351" />
                        </linearGradient>
                        <linearGradient id="borderMotion" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0a7cf4" />
                            <stop offset="100%" stopColor="#0bb48c" />
                        </linearGradient>
                        <linearGradient id="borderDevelop" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#17ef1e" />
                            <stop offset="100%" stopColor="#1aff00" />
                        </linearGradient>

                        <linearGradient id="multi-color-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="20%" stopColor="orange" stopOpacity="1" />
                            <stop offset="32%" stopColor="#9920ce" stopOpacity="1" />
                            <stop offset="50%" stopColor="#e1b03b" stopOpacity="1" />
                            <stop offset="62%" stopColor="#0a7cf4" stopOpacity="1" />
                            <stop offset="80%" stopColor="#17ef1e" stopOpacity="1" />
                        </linearGradient>

                        <filter id="blur-effect" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                        </filter>

                    </defs>

                    <polygon 
                        points="745 55 56.6 55 -15 0 810 0 745 55" 
                        fill="url(#multi-color-gradient)"
                        filter="url(#blur-effect)"
                    />

                    <polygon 
                        points="745 48.8 56.6 48.8 0 0 802 0 745 48.8" 
                        fill="#0f0f3f" 
                        stroke="url(#borderGradient)" 
                        strokeWidth="5" 
                    />

                    <g clipPath="url(#clippath)">
                        <circle cx="143" cy="48" r="29" fill="#0f0f3f" stroke="url(#border3DModel)" strokeWidth="4.3"/>
                        <circle cx="270.1" cy="48" r="29" fill="#0f0f3f" stroke="url(#borderPhotoshop)" strokeWidth="4.3"/>
                        <circle cx="399.4" cy="48" r="29" fill="#0f0f3f" stroke="url(#borderGraphic)" strokeWidth="4.3" />
                        <circle cx="528.83" cy="48" r="29" fill="#0f0f3f" stroke="url(#borderMotion)" strokeWidth="4.3" />
                        <circle cx="658.2" cy="48" r="29" fill="#0f0f3f" stroke="url(#borderDevelop)" strokeWidth="4.3" />
                    </g>

                    <rect x="92.02" y="4.04" width="613.68" height="42.4" fill="#0f0f3f" strokeWidth="0"/>

                    <image id="icono" href={model} y="38" x="131" width="25" height="30" onClick={filterModel} style={{ cursor: 'pointer' }}/>
                    <image id="icono" href={photoshop} y="38" x="259.2" width="22" height="30" onClick={filterModel} style={{ cursor: 'pointer' }}/>
                    <image id="icono" href={graphic} y="38" x="388" width="22" height="30" onClick={filterModel} style={{ cursor: 'pointer' }}/>
                    <image id="icono" href={motion} y="38" x="520" width="22" height="30" onClick={filterModel} style={{ cursor: 'pointer' }}/>
                    <image id="icono" href={develop} y="38" x="646" width="25" height="30" onClick={filterModel} style={{ cursor: 'pointer' }}/>

                    <g>
                        <text x="113.5" y="25" fontSize="18" fill="white">3D Model</text>
                        <text x="239" y="25" fontSize="18" fill="white">Photoshop</text>
                        <text x="377" y="25" fontSize="18" fill="white">Graphic</text>
                        <text x="508" y="25" fontSize="18" fill="white">Motion</text>
                        <text x="636" y="25" fontSize="18" fill="white">Develop</text>
                    </g>

                </svg>

{/* 
                    <div className={styles.allImages}>
                        <img className={styles.imageNav} src={model} alt="3D model"/>
                        <img className={styles.imageNav} src={photoshop} alt=""/>
                        <img className={styles.imageNav} src={graphic} alt=""/>
                        <img className={styles.imageNav} src={motion} alt=""/>
                        <img className={styles.imageNav} src={develop} alt=""/>
                    </div> */}

                </div>
            </div>






{/* 
                        <div className={styles.navbarEdgeLeft}></div>
                        <div className={styles.selectionBox}>
                            <div className={styles.buttonsNav}>
                                <p className={styles.text}>3D Model</p>
                                <div className={styles.imageBox}>
                                    <img className={styles.imageItself} src={model}/>
                                </div>
                            </div>
                            <div className={styles.buttonsNav}>
                                <p className={styles.text}>Photoshop</p>
                                <div className={styles.imageBox}>
                                    <img className={styles.imageItself} src={photoshop}/>
                                </div>
                            </div>
                            <div className={styles.buttonsNav}>
                                <p className={styles.text}>Graphic</p>
                                <div className={styles.imageBox}>
                                    <img className={styles.imageItself} src={graphic}/>
                                </div>
                            </div>
                            <div className={styles.buttonsNav}>
                                <p className={styles.text}>Motion</p>
                                <div className={styles.imageBox}>
                                    <img className={styles.imageItself} src={motion}/>
                                </div>
                            </div>
                            <div className={styles.buttonsNav}>
                                <p className={styles.text}>Develop</p>
                                <div className={styles.imageBox}>
                                    <img className={styles.imageItself} src={develop}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.navbarEdgeRight}></div> */}

                        {/* <div className={styles.backgroundEdgeLeft}></div>
                        <div className={styles.backgroundNav}>
                            <div className={styles.backgroundButton}>
                                <div className={styles.imageBackground}>
                                </div>
                            </div>
                            <div className={styles.backgroundButton}>
                                <div className={styles.imageBackground}>
                                </div>
                            </div>
                            <div className={styles.backgroundButton}>
                                <div className={styles.imageBackground}>
                                </div>
                            </div>
                            <div className={styles.backgroundButton}>
                                <div className={styles.imageBackground}>
                                </div>
                            </div>
                            <div className={styles.backgroundButton}>
                                <div className={styles.imageBackground}>
                                </div>
                            </div>
                        </div>
                        <div className={styles.backgroundEdgeRight}></div>

                        */}



        </>
    )
}