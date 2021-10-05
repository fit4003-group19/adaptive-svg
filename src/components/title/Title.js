import React from "react";
import "./Title.scss";

export const Title = ({ className }) => {
  return (
    <div className={`${className} title`}>
      <h1>Monash Campus Centre</h1>
    </div>
  );
};

export default Title;
