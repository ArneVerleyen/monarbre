import React from "react";


import wieZijnWe from '../../_static/img/wie_zijn_we.jpg';
import watIsBoomverzorging from '../../_static/img/wat_is_boomverzorging.jpg';
import veiligheid from '../../_static/img/veiligheid.jpg';


import './homeContent.scss';

const HomeContent = () => {

    return (
        <div id="text" className="home_content">
            <div className="residentiele" >
                <img src={wieZijnWe} alt="residentiële gebouwen" />
                <div className="text">
                    <h4>
                        Wie ben ik?
                    </h4>
                    <br></br>
                    <p>
                        Ik ben een jonge zelfstandige die al sinds kinds af aan gefascineerd is door bomen.

                        Toen ik voor het eerst hoorde over een boomverzorger of boomchirurg was ik meteen ‘ja, dat is wat ik wil worden!’.

                        Ik oefen dan ook vandaag de dag deze prachtige job uit, met veel passie en enthousiasme!
                    </p>
                </div>
            </div>
            <div className="niet_residentiele" >
                <div className="text">
                    <h4>
                        Wat is boomverzorging voor ons?
                    </h4>
                    <br></br>
                    <p>
                        Boomverzorger als bemiddelaar tussen mens en boom
                        <br></br>
                        <br></br>
                        Zowel de mens als de boom leidt een koppig bestaan en de balans zoeken is niet gemakkelijk, zolang de ene partij de ander niet begrijpt.
                        Daarom vinden we het bij Mon-Arbre heel belangrijk om goed te communiceren met de klant. We zoeken altijd naar de beste optie, één die zowel de boom als de klant tevreden maakt.
                        We behandelen uw bomen alsof ze de onze zijn.
                    </p>
                </div>
                <img src={watIsBoomverzorging} alt="niet residentiële gebouwen" />
            </div>
            <div className="gemeenschappelijke" alt="gemeenschappelijke delen" >
                <img src={veiligheid} alt="Foto gemeenschappelijke delen" />
                <div className="text">
                    <h4>
                        Veiligheid
                    </h4>
                    <br></br>
                    <p>
                        Veiligheid is een zeer belangrijk aspect voor ons.
                        Er worden geen werken uitgevoerd voordat ieders veiligheid gegarandeerd is. 
                        Op de werf is er altijd minstens 1 persoon die beschikt over een erkend EHBO certificaat + forestry first aid certificaat.
                        Ook hier vinden we communicatie met de klant zeer belangrijk om te zorgen dat alle werken veilig kunnen verlopen voor de klant, voor ons en voor eventuele omstaanders.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;