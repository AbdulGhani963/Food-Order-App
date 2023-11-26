import React, { useRef, useState } from "react";
import classes from "./MealsForm.module.css";
import Input from "../../UI/Input";

function MealsForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputref = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputref.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) { 
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputref}
        label="Amount"
        input={{
          id: "1",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealsForm;
