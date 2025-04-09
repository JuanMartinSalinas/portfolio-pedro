import style from './Cards.module.css';
import data from '../../data.js'
import arrow from '../../assets/arrow.png'
import { useEffect, useState } from 'react';
import image from '../../../public/image.jpg'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import {Link} from 'react-router-dom';

import useStore from '../../store.js'

export default function Cards() {

    const [direction, setDirection] = useState(false);
    const [contact, setContact] = useState(true);

    const filter = useStore((state) => state.filters);

    function handleDirection() {
        setDirection(!direction);
        // console.log(direction);
    }

    function sendEmail(e) {
        e.preventDefault();
        alert("xd")
    }

    function handleContact() {
        setContact(!contact);
    }

    const projects = data.filter(project => {
        const activeFilters = Object.keys(filter).filter(key => filter[key]);
      
        if (activeFilters.length === 0) return true;
      
        return project.techList.some(tech => activeFilters.includes(tech));
      });

    return(
        <>
            <div className={direction === true ? style.mainBoxCard : style.mainBoxAbout}>
                    <div className={style.cardBox}>
                        {projects.map((e)=> {
                            return(
                                <Link to={`/projects/${e.id}`} className={style.card}>
                                    <div key={e.id}>
                                        <div className={style.techBox}>
                                        {
                                            e.techs.map((e)=> {
                                                return (
                                                    <img className={style.techUsed} src={e} alt="svg"/>
                                                )
                                            })
                                        }  
                                        </div>
                                        <h1 className={style.titulo}>{e.titulo}</h1>
                                        <div className={style.imageAndText}>
                                            <img className={style.cardImg} src={e.picture}/>
                                            <p className={style.paragraph}>{e.descripcion}</p>
                                        </div>
                                    </div>
                                </Link>
                       )
                        })}
                    </div>

                    <div className={direction === true ? style.aboutAccordeonOpened : style.aboutAccordeon}>
                        <div onClick={handleDirection}>
                            <div className={direction === true ? style.textMainAccordeonOpened : style.textMainAccordeon}>Pedro Guillermo Parnisari</div>
                            <div className={style.arrowBoxAccordeon}><img className={style.arrowImgAccordeon} src={arrow} alt="arrow"/></div>
                        </div>

                        <div className={style.aboutBox}>
                            <div className={style.aboutImgBox}>
                                <img className={style.aboutImg}  src={image} alt="imagen del más capo"/>
                                <div className={style.aboutContactBox}>
                                    <a href="https://www.instagram.com/pedroparnisari/"><img className={style.contactButton} src={instagram}/></a>
                                    <a href="https://www.linkedin.com/in/pedroparnisari/"><img className={style.contactButton} src={linkedin}/></a>
                                    <button className={style.buttonContact} onClick={handleContact}>{contact ?  "Contáctame" : "Sobre mí"}</button>
                                </div>
                            </div>
                            <div className={style.aboutData}>
                                 <h1 className={style.aboutTitle}>Pedro Guillermo Parnisari</h1>
                                 <h2 className={style.aboutSubtitle}>Diseñador multimedial y comunicador digital</h2>
                                 <p className={style.aboutParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec elit nisi. Proin aliquet varius massa hendrerit viverra. Sed accumsan maximus rhoncus. Fusce ullamcorper dictum auctor. Vivamus tincidunt consectetur erat, ut euismod nunc fermentum in. Aenean in porttitor odio. Aliquam erat volutpat. Mauris vestibulum feugiat lectus, vitae luctus ex dapibus vel. Etiam non neque ornare, dignissim turpis vitae, pharetra ipsum. Praesent maximus arcu at magna imperdiet, non fermentum felis ullamcorper. Morbi ultricies arcu quis ex rhoncus tempus.</p>

                                 <form className={style.aboutForm} onSubmit={sendEmail}>
                                     <div className={style.dataForm}>
                                         <h3 className={style.contactTitle}>Estemos en contacto | Envíame un mensaje abajo</h3>
                                         <input type="email" className={style.inputEmail} placeholder="Tu correo electrónico"/>
                                         <input type="text" className={style.inputTitle} placeholder="El título del correo"/>
                                     </div>
                                     <div className={style.messageForm}>
                                         <textarea className={style.inputText} placeholder="Tu mensaje"/>
                                     </div>
                                     <button className={style.button} type="submit">Enviar correo</button>
                                 </form>
                            </div>
                            <div className={style.aboutDataMobile}>
                         
                                {contact ?
                                    <div>
                                        <h1 className={style.aboutTitle}>Pedro Guillermo Parnisari</h1>
                                        <h2 className={style.aboutSubtitle}>Diseñador multimedial y comunicador digital</h2>
                                        <p className={style.aboutParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec elit nisi. Proin aliquet varius massa hendrerit viverra. Sed accumsan maximus rhoncus. Fusce ullamcorper dictum auctor. Vivamus tincidunt consectetur erat, ut euismod nunc fermentum in. Aenean in porttitor odio. Aliquam erat volutpat. Mauris vestibulum feugiat lectus, vitae luctus ex dapibus vel. Etiam non neque ornare, dignissim turpis vitae, pharetra ipsum. Praesent maximus arcu at magna imperdiet, non fermentum felis ullamcorper. Morbi ultricies arcu quis ex rhoncus tempus.</p>
                                    </div> :
                                        <form className={style.aboutForm} onSubmit={sendEmail}>
                                            <div className={style.dataForm}>
                                                <h3 className={style.contactTitle}>Estemos en contacto | Envíame un mensaje abajo</h3>
                                                <input type="email" className={style.inputEmail} placeholder="Tu correo electrónico"/>
                                                <input type="text" className={style.inputTitle} placeholder="El título del correo"/>
                                            </div>
                                            <div className={style.messageForm}>
                                                <textarea className={style.inputText} placeholder="Tu mensaje"/>
                                            </div>
                                            <button className={style.button} type="submit">Enviar correo</button>
                                        </form>
                                    }
                            </div>
                        </div>
                    </div>               

            </div>
        </>
    )
}