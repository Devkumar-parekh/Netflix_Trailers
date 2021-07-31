import './Card.css';
import Card from './Card';
import Header from './Header';
import './App.css';

import Sdata from './Sdata';

function ncard(val){
  return(
    <Card  
            img={val.img} 
            title={val.title} 
            link={val.link} 
            alt={val.alt}/>
  );
}

function App(){

  return(
    <>
      

        <Header/>
        <div className="line">
          {Sdata.map(ncard)};          
        </div>
    </>
  );
  
}

export default App;