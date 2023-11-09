import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Cards from "./cards.component";
import classes from "./home.module.css";
import Iframe from "react-iframe";
import { Register } from "../register.component";
import TrainingTable from "./trainingTable.component";
import { fetchTrainings } from "../../query/fetchTrainingPlans";
import { toast } from "react-toastify";
import ContactForm from "./contact.component";

const Home = () => {
  const [isContent, setIsContent] = useState("");

  const { isLoading, error, data } = useQuery({
    queryKey: ["trainingPlans"],
    queryFn: () => fetchTrainings(),
  });

  console.log(data);
  useEffect(() => {
    fetchTrainings();
  }, []);

  const handleTrainingPlan = () => {
    setIsContent("table");
  };

  const handleContent = (e) => {
    const contentType = e.target.innerText.toLowerCase();
    setIsContent(contentType);
  };

  // const handleBuy = () => {
  //   if(){
  //     setIsContent("register")
  //   }
  // }

  return (
    <>
      <div className={classes.backPic}>
        <div className={classes.btnContainer}>
          <button
            className={`btn btn-outline-secondary ${classes.startBtn}`}
            onClick={handleContent}
          >
            Register
          </button>
          <button
            className={`btn btn-outline-secondary ${classes.startBtn}`}
            onClick={handleContent}
          >
            Calendar
          </button>
          <button
            className={`btn btn-outline-secondary ${classes.startBtn}`}
            onClick={handleContent}
          >
            Blog
          </button>
          <button
            className={`btn btn-outline-secondary ${classes.startBtn}`}
            onClick={handleContent}
          >
            Schedule
          </button>
        </div>
        <div className={classes.contentContainer}>
          {isContent === "register" && <Register />}
          {isContent === "table" && <TrainingTable data={data}/>}
          {isContent === "schedule" && <ContactForm />}
          {/* {isContent === "calendar" && <Calendar />} */}
          {/* {isContent === "blog" && <Blog />} */}
        </div>

        <Iframe
          url="https://www.youtube.com/embed/9WXsdApQIY4"
          width="550px"
          height="300px"
          id=""
          className={classes.video}
          display="block"
        />
      </div>

      <div className={`container ${classes.section}`}>
        <h1 className={classes.programTitle}>30 Day Program</h1>
        <div className={classes.cards}>
          {error && toast.error(error)}
          {isLoading && <p>Loading...</p>}
          {data &&
            data.map((plan) => {
              return (
                <Cards
                  key={plan._id}
                  onTrainingHandler={handleTrainingPlan}
                  // onBuyHandler={handleBuy}
                  id={plan._id}
                  title={plan.title}
                  description={plan.description}
                  price={plan.price}
                  data={data}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
