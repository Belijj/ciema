import './home.css';
import HomeImg from './homeimg.png';

function Home() 
{
    return(
        <div className='home__wrap'>
            <div className='text__area'>
                <h1>Ciemakukulis</h1>
                <p>Garši rausīši, silta maizīte, uz mēles kūstiši cepumiņi, tortes un citi kārumi...</p>
                <button>Katalogs</button>
            </div>
            <div className='photo__area'>
                <img src={HomeImg}></img>
            </div>
        </div>

    );
}

export default Home;