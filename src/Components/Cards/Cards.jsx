import style from './Cards.module.css';
import data from '../../data.js'
import arrow from '../../assets/arrow.png'
import { useState } from 'react';
import image from '../../../public/image.jpg'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'

export default function Cards() {

    const [direction, setDirection] = useState(true);

    function handleState() {
        setDirection(!direction);
        console.log(direction);
    }


    return(
        <>
            <div className={direction === true ? style.mainBoxCard : style.mainBoxAbout}>
                <div className={style.yetAnotherCardBox}>
                    <div className={style.cardBox}>
                        {data.map((e)=> {
                            return(
                                <div key={e.id} className={style.card}>

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
                       )
                        })}
                    </div>
                </div>

                <div className={direction === true ? style.arrowBoxCard : style.arrowBoxAbout}>
                    <img className={style.arrowImg} src={arrow} onClick={handleState}/>
                </div>
                
                <div className={style.aboutBox}>
                    <div className={style.yetAnotherAboutBox}>
                        <div className={style.aboutImgBox}>
                            <img className={style.aboutImg}  src={image} alt="imagen del más capo"/>
                            <div className={style.aboutContactBox}>
                                <img className={style.contactButton} src={instagram}/>
                                <img className={style.contactButton} src={linkedin}/>    
                            </div>
                        </div>
                        <div className={style.aboutData}>
                            <h1 className={style.aboutTitle}>Pedro Guillermo Parnisari</h1>
                            <h2 className={style.aboutSubtitle}>Diseñador multimedial y comunicador digital</h2>
                            <p className={style.aboutParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec elit nisi. Proin aliquet varius massa hendrerit viverra. Sed accumsan maximus rhoncus. Fusce ullamcorper dictum auctor. Vivamus tincidunt consectetur erat, ut euismod nunc fermentum in. Aenean in porttitor odio. Aliquam erat volutpat. Mauris vestibulum feugiat lectus, vitae luctus ex dapibus vel. Etiam non neque ornare, dignissim turpis vitae, pharetra ipsum. Praesent maximus arcu at magna imperdiet, non fermentum felis ullamcorper. Morbi ultricies arcu quis ex rhoncus tempus.</p>
                            <form className={style.aboutForm}>
                                <div className={style.dataForm}>
                                    <h3 className={style.contactTitle}>Estemos en contacto | Envíame un mensaje abajo</h3>
                                    <input type="email" className={style.inputEmail} placeholder="Tu correo electrónico"/>
                                    <input type="text" className={style.inputTitle} placeholder="El título del correo"/>
                                </div>
                                <div className={style.messageForm}>
                                    <textarea className={style.inputText} placeholder="Tu mensaje"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}