import React, { useState } from 'react';
import NavBar from './components/navbar/Navbar'
import Section1 from './components/main/Section1';
import Cart from './components/cart/Cart';


function App() {
  const [isItemShow, setIsItemShow] = useState(false)

  const showCartItemHandler = () =>{
    setIsItemShow(true)
  }

  const hideCartItemHandler = () =>{
    setIsItemShow(false)
  }
  return (
    <div>
      <NavBar onShow={showCartItemHandler}/>
      <Section1 />
      {isItemShow && <Cart onHide={hideCartItemHandler}/>}
    </div>
  );
}

export default App;
