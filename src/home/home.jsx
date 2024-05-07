import './home.css';
import HomeImg from './bublik.png';
import { useState } from 'react';

function Home() {
    return (
        <div className='prikol'>
            <div className='home__wrap'>
                <div className='intro__text'>
                    <img src={HomeImg} alt="Home" />
                    <h1>Ciemakukulis</h1>
                    <p>Garši rausīši, silta maizīte, uz mēles kūstiši cepumiņi, tortes un citi kārumi...</p>
                </div>
                <div className='intro__buttons'>
                    <button>Katalogs</button>
                    <button>Lokacijas</button>
                </div>
                <div className='about__us'>
                    <h1>Par Mums</h1>
                    <p>Te nu mēs esam - Ciemaukulis</p>
                    <div className='about__p'>
                        <p>Ar svaigu maizīti, kas glabā krāsns siltumu, ar gardiem kliņģeriem, biezpienmaizi un smalkmaizītēm, kas smaržo pēc bērnības. Ar cepumiņiem, tortēm un daudziem gardumiem, ko cepam par prieku jums – savējiem.</p>
                        <p>Mums svarīgs viss īstais un nesamākslotais – tāpēc rausīši un cepumi top no mīklas, kas nepazīst irdinātāju un citu mākslīgu piedevu. Toties prasmīgu roku pieskārienu un sirds klātieni gan. Tā pamazām modinot arī īsto garšas sajūtu. Varbūt mazliet aizmirstu.</p>
                        <p className='context'>Jūs jautāsit – kā tas sākās?</p>
                        <p>Tieši patiesas attieksmes dēļ pret visu īsto, nesamāksloto un garšīgo Ciemakukulis tapa nevis kā komerciāls pasākums un dzelžaini izplānots bizness, bet gan kā mūsu vēlmju īstenojums. Daudzi mūsu gardumi vispirms dzimuši un izmēģināti pašu mājās, līdz atzīti par labiem. Mūsu virtuvē rosās cilvēki, kuriem beķera un konditora amats ir ne vien peļņas veids, bet arī īstena sirdslieta. Mēs jūs lutināsim – ar svaigu maizi, ar gardiem kliņģeriem un smalkmaizītēm, ar cepumiem, tortēm un daudziem gardumiem, ko cepsim ar prieku, lai iepriecinātu savējos. Ir taisnība tiem, kuri apgalvo, ka labā noskaņā un ar prieku radīts ēdiens garšo īpaši</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
