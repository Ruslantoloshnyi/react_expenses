import "./CostForm.css";
import React, { useState } from "react";

function CostForm(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  function NameChangeHandler(event) {
    setName(event.target.value);
  }

  function PriceChangeHandler(event) {
    setPrice(event.target.value);
  }

  function DateChangeHandler(event) {
    setDate(event.target.value);
  }

  function SubmitHandler(event) {
    const CostData = {
      name: name,
      price: price,
      date: new Date(date),
    };

    props.onSaveCostData(CostData);

    setName("");
    setPrice("");
    setDate("");

    event.preventDefault();
  }

  function hideFormHandler() {
    props.hideForm();
  }

  return (
    <form onSubmit={SubmitHandler} action="">
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="">Name</label>
          <input
            value={name}
            onChange={NameChangeHandler}
            type="text"
            required
          />
        </div>

        <div className="new-cost__control">
          <label htmlFor="">Price</label>
          <input
            value={price}
            onChange={PriceChangeHandler}
            type="text"
            min="1"
            step="1"
            required
          />
        </div>

        <div className="new-cost__control">
          <label htmlFor="">Date</label>
          <input
            value={date}
            onChange={DateChangeHandler}
            type="date"
            min="2022-01-01"
            max="2030-12-31"
            required
          />
        </div>

        <div className="new-cost__actions">
          <button type="submit">Add expense</button>
        </div>

        <div className="new-cost__actions">
          <button onClick={hideFormHandler} type="submit">
            Hide form
          </button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;
