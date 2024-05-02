import './home.css';
import HomeImg from './homeimg.png';

function Home() 
{
    return(
        <div className='home__wrap'>
            <div className='intro__text'>
                <h1>Ciemakukulis</h1>
                <p>Garši rausīši, silta maizīte, uz mēles kūstiši cepumiņi, tortes un citi kārumi...</p>
            </div>
            <div className='intro__buttons'>
                <button>Katalogs</button>
                <button>Lokacijas</button>
            </div>
        </div>

    );
}

export default Home;