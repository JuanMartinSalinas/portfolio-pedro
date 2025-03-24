import {useParams} from 'react-router-dom';
import {useState} from 'react';

import styles from './Projects.module.css';

import data from './../../data.js';

import model from '../../../public/logos/3D_stroke.svg'
import photoshop from '../../../public/logos/Photoshop_stroke.svg'
import graphic from '../../../public/logos/Graph_stroke.svg'
import motion from '../../../public/logos/Motion_stroke.svg'
import develop from '../../../public/logos/Develop_stroke.svg'

export default function Projects() {

    const {id} = useParams();
    const project = data.find((p) => p.id.toString() === id);    

    const [stack, setStack] = useState(project.techs);

    console.log(stack);

    return(
        <>
            <div className={styles.mainBox}>
                <div className={styles.headerBox}>
                    <h1 className={styles.title}>{project.titulo}</h1>
                    <img className={styles.headerImg} src={project.picture} alt="Imagen del proyecto"/>
                    <div className={styles.techBox}>
                        <div className={styles.everyTech}>
                            <div className={styles.techImgBox}><img className={stack.includes("logos/3D_Color.svg") ? styles.techImgOn : styles.techImgOff} src={model} alt=""/></div>
                            <p className={styles.techName}>3D Model</p>
                        </div>
                        <div className={styles.everyTech}>
                            <div className={styles.techImgBox}><img className={stack.includes("logos/Photoshop_Color.svg") ? styles.techImgOn : styles.techImgOff} src={photoshop} alt=""/></div>
                            <p className={styles.techName}>Photoshop</p>
                        </div>
                        <div className={styles.everyTech}>
                            <div className={styles.techImgBox}><img className={stack.includes("logos/Graphic_Color.svg") ? styles.techImgOn : styles.techImgOff} src={graphic} alt=""/></div>
                            <p className={styles.techName}>Graphic</p>
                        </div>
                        <div className={styles.everyTech}>
                            <div className={styles.techImgBox}><img className={stack.includes("logos/Motion_Color.svg") ? styles.techImgOn : styles.techImgOff} src={motion} alt=""/></div>
                            <p className={styles.techName}>Motion</p>
                        </div>
                        <div className={styles.everyTech}>
                            <div className={styles.techImgBox}><img className={stack.includes("logos/Develop_Color.svg") ? styles.techImgOn : styles.techImgOff} src={develop} alt=""/></div>
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
                                                <div className={styles.everySoftware}><img className={styles.imgSoft} src={photoshop} alt=""/></div>
                                                <div className={styles.softwareDesc}>
                                                    <h3 className={styles.softwareName}>{e}</h3>
                                                    <p className={styles.softwareInfo}>Yea perdonen kame hame ha después del tema de tetris viene el db rap quien no haya seguido esta serie</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.collabMainBox}>
                        <h2 className={styles.softwareTitle}>En colaboración con</h2>
                        <div className={styles.collabs}>
                            {/* {
                                project.collabs.map((e) => {
                                    return(
                                        <div className={styles.everyCollab}>

                                            <h3>{e}</h3>
                                            <p>{e}</p>
                                        </div>
                                    )
                                })
                            } */}
                        </div>
                    </div>
                    <div className={styles.workMainBox}>
                        <h2 className={styles.softwareTitle}>Trabajando para</h2>
                        <div>
                            <div className={styles.workInfo}>
                                <h3>Lagunas enterprise</h3>
                                <p>Lorem ipsum</p>
                            </div>
                            <img src={project.picture} alt="a"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}