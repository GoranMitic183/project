import React, { useState } from "react";
// import { Link } from "react-router-dom";
import classes from "./cards.module.css";
import { useNavigate } from "react-router-dom";

const Cards = ({ onTrainingHandler,...props }) => {
  const navigate = useNavigate();
const [isRegister, setIsRegister] = useState(false);
const { title, description, price, id} = props
  const onBuyHandler = () => {
    // const program = id;
    if(localStorage.getItem('token')){
     return navigate('/buy')
    }
    setIsRegister(true);
    setTimeout(()=>{
      setIsRegister(false);
    },4000)
    navigate('/buy')
  }

  return (
    <div className="container">
      <button
        className={`card ${classes.cards}`}
        style={{ width: "18rem" }}
        onClick={onTrainingHandler}
      >
        <img src="https://static.wixstatic.com/media/d1d11f_b9bf77d9759444368b9e713c79354105~mv2.png/v1/fill/w_640,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d1d11f_b9bf77d9759444368b9e713c79354105~mv2.png" className="card-img-top" alt="Training plan" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {description}
          </p>
          <button onClick={onBuyHandler} className="btn btn-outline-secondary">
          {`Buy ${price}$`}
          </button>
          {isRegister && <p>You must be registered!</p>}
        </div>
      </button>
    </div>
  );
};

export default Cards;
