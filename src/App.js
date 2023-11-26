import React, { useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import CardProvider from './store/CartProvider'

function App() {
 const [cartIsShow, setCartIsShown] = useState(false);

 const showCartHandler = () => {
   setCartIsShown(true);
 };

 const hiddenCartHandler = () => {
    setCartIsShown(false);
 };


  return (
    <CardProvider>
      {cartIsShow && <Cart onCloseCart={hiddenCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
       <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
