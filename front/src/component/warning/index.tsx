import "./index.css";
import warning from "./warning.svg";
import React, { ReactNode } from "react";

type WarningProps = {
  children: ReactNode;
};

const Warning: React.FC<WarningProps> = ({ children }) => {
  return (
    <div className="warning">
      <img className="warning_img" src={warning} alt="warning" />
      <span className="warning_text">{children}</span>
    </div>
  );
};

export default Warning;
