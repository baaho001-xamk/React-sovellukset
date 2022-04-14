import { useState, useEffect } from "react";



function App() {


  const [valinta, SetValinta] = useState("USD");

  const [summa, SetSumma] = useState();

  const [tulos, SetTulos] = useState();

  const [valmis, SetValmis] =  useState(false);


  const LaskeMuunnos = () => {

    SetTulos((data.kurssit.rates[valinta] * summa).toFixed(2));
    SetValmis (true);
  }



  

  const [data, setData] = useState({
                                      kurssit : [],
                                      tiedotHaettu : false,
                                      virhe : null
                                   });

  const haeTiedot = async () => {

    try {

      const yhteys = await fetch("https://api.exchangeratesapi.io/latest");
      const tiedot = await yhteys.json();
      console.log(tiedot.rates.USD);

      
  
      setData({
                ...data,
                kurssit : tiedot,
                tiedotHaettu : true
              });

    } catch (e) {

      setData({
        ...data,
        tiedotHaettu : false,
        virhe : "Yhteyttä palvelimeen ei voitu muodostaa. Yritä hetken kuluttua uudestaan."
      });


    }

  }
  

  useEffect(() => {

    haeTiedot();

  }, [] );

  return (
    <div className="container">


      <h1>OPPIMISTEHTÄVÄ 3: LIVE-VALUUTTAMUUNNIN</h1>

      <input onChange={ (e) => {
                                                  SetSumma(e.target.value);
                                                  } }  class="form-control" placeholder="summa"></input>

      

      <button onClick={LaskeMuunnos} className="btn btn-success">Laske valuuttamuunnos</button>


      

      

                                                  

                                                    <select  onChange={ (e) => {
                                                  SetValinta(e.target.value);
                                                  } } >
                                                    <option value="USD">USD</option>
                                                    <option value="GBP">GBP</option>
                                                    <option value="SEK">SEK</option>
                                                    <option value="NOK">NOK</option>
                                                    <option value="RUB">RUB</option>

                                                  </select>

                                                
                                                 {(valmis)

                                                
                                                   ?<div className="alert alert-success">Muunnoksen tulos: {summa} € = {tulos} {valinta}</div>
                                                   :null
                                                  
                                                  }
                                                   
                                                  


                                                        
                                                        

     
          </div>
      

  );
  
}

export default App;
