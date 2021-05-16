import React from "react";
import Baloon from "../Charts/Baloon";
import "./styles.scss";
import { randomNumber } from "../Utils/randomGenerator";

const BubbleContainer = () => {
  const data = [12, 23, 34, 45, 56];

  return (
    <>
      {data.map((i) => {
        return (
          <div className={["flexColumnCentered"]} key={i}>
            <Baloon text={randomNumber(33, 90)} />
            <div className={["baloonLegand"]}>
              Duis aute <br />
              irure dolor
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BubbleContainer;
