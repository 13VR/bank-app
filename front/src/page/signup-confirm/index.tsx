import "./index.css";

import Button from "../../component/button";
import PageTitle from "../../component/page-title";

import Grid from "../../component/grid";
import Arrow from "../../component/back-button";

import { Link } from "react-router-dom";
import Input from "../../component/input";
import { useState } from "react";
import axios from "axios";

const ERROR = "Please, enter your code";

const SignUpConfirm: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const handleCodeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCode(e.target.value);
    setError(e.target.value.trim().length === 0);
  };

  const handleSubmit = async () => {
    if (code.length === 0) return null;

    try {
      const response = await axios.post("", code);
      if (response.status === 200) {
        console.log("Ok");
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };
  const isDisabled: boolean = code.length === 0;
  return (
    <Grid>
      <Arrow />
      <div className="custom_page">
        <header className="custom_header">
          <PageTitle
            title={"Confirm account!"}
            description={"Write the code you received"}
          />

          <Input
            id="code"
            status={error ? "error" : ""}
            value={code}
            onChange={handleCodeChange}
            title={"Code"}
            text={"Code"}
            type={"number"}
          >
            {error ? <span style={{ color: "red" }}>{ERROR}</span> : ""}
          </Input>
        </header>

        <Link to={"/balance"}>
          <Button disabled={isDisabled} onClick={handleSubmit}>
            Confirm
          </Button>
        </Link>
      </div>
    </Grid>
  );
};

export default SignUpConfirm;
