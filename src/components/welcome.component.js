import React from "react";
import { useNavigate } from "react-router-dom";
// import Cards from "./mainLayaut/cards.component";
import classes from "./welcome.module.css";

const Welcome = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5dfbf93da16ab5503da18e83/1672676260228-YKVCBW35B2OQEPZYD3BX/GZ6A1762.jpg?format=1500w"
        className={`img-fluid ${classes.img}`}
        alt="profilPicture.."
      ></img>
      <div className="container">
        <button
          className={`btn btn-outline-secondary ${classes.startBtn}`}
          onClick={handleContinue}
        >
          Start Your Journey Now!
        </button>
      </div>
    </>
  );
};

export default Welcome;
