import {Link, useParams} from 'react-router-dom';
import {useState} from 'react';

import styles from './Projects.module.css';

import data from './../../data.js';

import arrow from '../../assets/arrow.png'

export default function Projects() {

    const {id} = useParams();
    const project = data.find((p) => p.id.toString() === id);    

    const [stack, setStack] = useState(project.techs);


    return(
        <>
            <Link to="/">
                <div className={styles.toMain}><img className={styles.arrow} src={arrow}/></div>
            </Link>
            <div className={styles.mainBox}>
                <div className={styles.headerBox}>
                    <h1 className={styles.title}>{project.titulo}</h1>
                    <img className={styles.headerImg} src={project.picture} alt="Imagen del proyecto"/>
                    <div className={styles.techBox}>
                        <div className={styles.everyTech}>
                            <div className={styles.techImgBox}><img className={stack.includes("logos/3D_Color.svg") ? styles.techImgOn : styles.techImgOff} src="/public/logos/3D_Stroke.svg" alt=""/></div>
                            <p className={styles.techName}>3D Model</p>
                        </div>
                        <div className={styles.everyTech}>
                            <div className={styles.techImgBox}><img className={stack.includes("logos/Photoshop_Color.svg") ? styles.techImgOn : styles.techImgOff} src="/public/logos/Photoshop_stroke.svg" alt=""/></div>
                            <p className={styles.techName}>Photoshop</p>
                        </div>
                        <div className={styles.everyTech}>
                            <div className={styles.techImgBox}><img className={stack.includes("logos/Graphic_Color.svg") ? styles.techImgOn : styles.techImgOff} src="/public/logos/Graph_stroke.svg" alt=""/></div>
                            <p className={styles.techName}>Graphic</p>
                        </div>
                        <div className={styles.everyTech}>
                            <div className={styles.techImgBox}><img className={stack.includes("logos/Motion_Color.svg") ? styles.techImgOn : styles.techImgOff} src="/public/logos/Motion_stroke.svg" alt=""/></div>
                            <p className={styles.techName}>Motion</p>
                        </div>
                        <div className={styles.everyTech}>
                            <div className={styles.techImgBox}><img className={stack.includes("logos/Develop_Color.svg") ? styles.techImgOn : styles.techImgOff} src="/public/logos/Develop_stroke.svg" alt=""/></div>
                            <p className={styles.techName}>Develop</p>
                        </div>
                    </div>
                </div>

                <p className={styles.desc}>{project.descripcion}</p>

                <div className={styles.bodyBox}>
                    <div className={styles.softwareMainBox}>
                        <img className={styles.imgSoftware} src={project.picture} alt="a"/>
                        <div className={styles.softwareData}>
                            <h2 className={styles.softwareTitle}>Software utilizado</h2>
                            <div className={styles.softwareList}>
                                {
                                    project.software.map((e) => {
                                        return(
                                            <div className={styles.softwareBox} key={e}>
                                                <div className={styles.everySoftware}><img className={styles.imgSoft} src="/public/logos/3D_Stroke.svg" alt=""/></div>
                                                <div className={styles.softwareDesc}>
                                                    <h3 className={styles.softwareName}>{e}</h3>
                                                    <p className={styles.softwareInfo}>Yea perdonen kame hame ha después del tema de tetris viene el db rap</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    {project.collabs ? 
                        <div className={styles.collabMainBox}>
                            <h2 className={styles.softwareTitle}>En colaboración con</h2>
                            <div className={styles.collabs}>
                                {
                                    project.collabs.map((e) => {
                                        return(
                                            <div className={styles.everyCollab}>
                                                <div className={styles.collabSymbol}></div>
                                                <div className={styles.collabBoxInfo}>
                                                    <h3 className={styles.collabTitle}>{e}</h3>
                                                    <p className={styles.collabDesc}>{e}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        :
                    null}

                    {project.boss ?
                        <div className={styles.workMainBox}>
                            <h2 className={styles.softwareTitle}>Trabajando para</h2>
                            <div className={styles.workingFor}>
                                <div className={styles.workInfo}>
                                    <h3 className={styles.workTitle}>Lagunas enterprise</h3>
                                <div className={styles.imageAndPic}>
                                    <p className={styles.workDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum tellus vitae ante molestie, et ornare magna laoreet. Vivamus bibendum venenatis leo, eget gravida massa gravida eu. Etiam finibus mollis purus, consectetur sollicitudin odio ullamcorper vel. Proin porta metus molestie quam ornare efficitur. Cras in dignissim mi. Pellentesque eget libero arcu. Donec vehicula mi sed faucibus iaculis. Nullam cursus nibh sit amet euismod tincidunt. Morbi ac iaculis augue. Curabitur tempus lacus nibh, id interdum sapien faucibus et. Integer in urna lacus. Integer id rhoncus sem. Nam bibendum sapien nec augue posuere condimentum.

</p>
                                    <img className={styles.imgWork} src={project.picture} alt="a"/>
                                </div>
                                </div>

                            </div>
                        </div>
                        :
                    null}
                </div>
            </div>
        </>
    )
}