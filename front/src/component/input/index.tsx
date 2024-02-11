import "./index.css";

import { useState } from "react";

type InputProps = {
  title: string;
  text: string;
  type: string;
  status?: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  pass?: boolean;
  children?: React.ReactNode;
  value: string;
};

const Input: React.FC<InputProps> = ({
  title,
  text,
  type,
  id,
  status = "default",
  children,
  value,
  onChange,
  pass,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id={id} className="field">
      <label className={`field_label field_label--${status}`}>{title}</label>
      {pass ? (
        <div className="field_wrapper">
          <input
            onChange={onChange}
            className={`field_input validation  field_input--${status}`}
            // value={value}
            placeholder={text}
            type={isVisible ? "text" : "password"}
          ></input>
          <span
            onClick={toggleVisibility}
            className={`field_icon field_icon--${status} ${
              isVisible ? "field_icon--eyehide" : "field_icon--eye"
            }`}
          ></span>
          {children}
        </div>
      ) : (
        <div className="field_wrapper">
          <input
            onChange={onChange}
            className={`field_input validation  field_input--${status}`}
            // value={value}
            placeholder={text}
            type={type}
          ></input>
          {children}
        </div>
      )}
    </div>
  );
};

export default Input;
