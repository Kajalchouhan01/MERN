import React from 'react'
import Person from './Person'
import Product from './Product'

const App = () => {
  return (
    // <div><Person name="Superman"email="superman@gmail" age={200}/>
    // <Person name="Spiderman"email="spiderman@gmail" age={400}/>
    // <Person name="batman"email="batman@gmail" age={600}/>
    
    // </div>
    <div><Product Title="Mobile" discription="iQOO Z9x 5G (Tornado Green, 4GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560K+ AnTuTu Score | 6000 mAh Battery with 7.99mm Slim Design | 44W FlashCharge" img="src" price={12999}/>
    </div>
  )
}

export default App