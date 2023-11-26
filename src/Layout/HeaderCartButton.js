import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx
  
  const numberOfCartItems = cartCtx.items.reduce((carNumber, item) => {
    return carNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;


  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    setbtnIsHighlighted(true);

    const timer = setTimeout( ()=> {
      setbtnIsHighlighted(false);
    }, 150 );

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
