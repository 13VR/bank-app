import "./index.css";
import React, { ReactNode } from "react";

type GridProps = {
  children: ReactNode,
  className?: string,
};

const Grid: React.FC<GridProps> = ({ children, className }) => {
  return <div className={`grid ${className}`}>{children}</div>;
};

export default Grid;
