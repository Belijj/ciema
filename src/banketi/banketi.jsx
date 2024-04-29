import './banketi.css';
import cakes from './cakes.jpeg';
import idk from './idk.jpeg';
import juice from './juice.jpeg';
import salad from './salad.jpeg';
import sandwich from './sandwich.jpeg';
import seledka from './seledka.jpeg';

function Banketi() {
  return (
    <div className='banketi__wrapper'>
      <div className='header__wrap'>
        <h1>Banketi</h1>
        <p>Uzkodas īpašiem pasākumiem/furšeti</p>
      </div>
      <div className='banketi__content'>
        <p>Vai tās būtu <span className='context'>lietišķas brokastis birojā</span>, risinot svarīgas sarunas, <span className='context'>kafijas pauzes</span> semināros un oficiālās sanāksmes vai omulīgs draugu <span className='context'>tusiņš</span> nedēļas nogalē, <span className='context'>dzimšanas diena</span>, mēs piedāvājam šādas uzkodas:</p>
        <div className='banketi__imgs'>
          <div className='banketi__img'>
            <img src={idk} alt="Sviestmaizes" />
            <p>Sviestmaizes</p>
          </div>
          <div className='banketi__img'>
            <img src={cakes} alt="Konditorejas izstrādājumi & kūkas" />
            <p>Konditorejas izstrādājumi & kūkas</p>
          </div>
          <div className='banketi__img'>
            <img src={sandwich} alt="Kruasāni" />
            <p>Kruasāni</p>
          </div>
          <div className='banketi__img'>
            <img src={seledka} alt="Dažāda veida plates" />
            <p>Dažāda veida plates</p>
          </div>
          <div className='banketi__img'>
            <img src={salad} alt="Salāti un dažādas aukstās uzkodas" />
            <p>Salāti un dažādas aukstās uzkodas</p>
          </div>
          <div className='banketi__img'>
            <img src={juice} alt="Dzērieni" />
            <p>Dzērieni</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banketi;