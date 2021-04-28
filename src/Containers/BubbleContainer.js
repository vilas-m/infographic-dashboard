import React from "react";
import Baloon from "../Charts/Baloon";
import "./styles.scss";

const BubbleContainer = () => {
  return (
    <>
      {[12, 23, 34, 45, 56].map((i) => {
        return (
          <div className={["flexColumnCentered"]} key={i}>
            <Baloon text={Math.ceil(Math.random() * (30 - 99) + 99)} />
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
