import './banketi.css';
import cakes from './cake.png';
import idk from './piroz.png';
import crois from './crois.png';
import pure from './pure.png';
import salat from './salat.png';
import drink from './drink.png';

function Banketi() {
  return (
    <div className='banketi__wrapper'>
      <div className='header__wrap'>
        <h1>Banketi</h1>
        <p>Uzkodas īpašiem pasākumiem/furšeti</p>
      </div>
      <div className='banketi__content'>
        <p>Vai tās būtu lietišķas brokastis birojā, risinot svarīgas sarunas,kafijas pauzes semināros un oficiālās sanāksmes vai omulīgs draugu tusiņš nedēļas nogalē, dzimšanas diena, mēs piedāvājam šādas uzkodas:</p>
        <div className='banketi__imgs'>
          <div className='banketi__img'>
            <img src={cakes} alt="Sviestmaizes" />
            <p>Sviestmaizes</p>
          </div>
          <div className='banketi__img'>
            <img src={idk} alt="Konditorejas izstrādājumi & kūkas" />
            <p>Konditorejas izstrādājumi & kūkas</p>
          </div>
          <div className='banketi__img'>
            <img src={crois} alt="Kruasāni" />
            <p>Kruasāni</p>
          </div>
          <div className='banketi__img'>
            <img src={pure} alt="Dažāda veida plates" />
            <p>Dažāda veida plates</p>
          </div>
          <div className='banketi__img'>
            <img src={salat} alt="Salāti un dažādas aukstās uzkodas" />
            <p>Salāti un dažādas aukstās uzkodas</p>
          </div>
          <div className='banketi__img'>
            <img src={drink} alt="Dzērieni" />
            <p>Dzērieni</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banketi;