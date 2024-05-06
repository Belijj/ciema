import './pasutijums.css';

function Pasutijums() {

    const handleCatalog = ()=>
    {
        window.location.href = "/catalogs";
    };
    const handleLoc = ()=>
        {
            window.location.href = "/lokacijas";
        };
    



    return (
        <div className='pas__wrap'>
            <h1>Pasutijumi</h1>
            <div className='pas__content'>
                <p>
                    Vienmēr priecāsimies par jūsu pasūtījumu un no sirds centīsimies padarīt jūsu svētkus jaukākus.<br />
                    <span className='context'>Pasūtījumu vēlams pieteikt vismaz dienu iepriekš, taču, ja tas paredzēts īpaši apjomīgs, tad – divas dienas.</span>
                </p>
                <p className='context'>Daži piemēri jūsu pasākumiem:</p>
                <p>
                    Bērnu tortes | Kāzu tortes | Uzņēmumu tortes | Dzimšanas un vārda dienu tortes | Svētku tortes | Kristību tortes | Jāņu svinības vai Ziemassvētku balle | Kolektīva kafijas padzeršana mājas vai darbā vai svaigā dabā
                </p>
                <p>
                    Pasūti torti ar jubilāra vārdu vai gadu skaitli - mēs to dāvināsim <span className='context'>BEZ MAKSAS!</span>
                </p>
                <p>
                    Visus pasūtījumus var pieteikt nākot pie mums ciemos un daudzas lietas apskatoties plauktos, kā arī var saņemt konsultācijas pie mūsu atsaucīgajām pārdevējām vai prasmīgajiem konditoriem
                </p>
                <p>
                    Pasūtījumus var pieteikt arī sazinoties ar mums atālināti.
                </p>
            </div>
            <div className='pas__btns'>
                <button onClick={handleCatalog}>Katalogs</button>
                <button onClick={handleLoc}>Lokācijas</button>
            </div>
        </div>
    );
}

export default Pasutijums;
