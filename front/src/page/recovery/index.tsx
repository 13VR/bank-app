import "./index.css";

import Button from "../../component/button";
import PageTitle from "../../component/page-title";

import Grid from "../../component/grid";
import Arrow from "../../component/back-button";

import { Link } from "react-router-dom";
import Input from "../../component/input";
import { useState } from "react";
import axios from "axios";

const ERROR_EMAIL = "Please, enter correct email";

const Recovery: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const handleCodeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    setError(e.target.value.trim().length === 0);
  };

  const handleSubmit = async () => {
    if (email.length === 0) return null;

    try {
      const response = await axios.post("", email);
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
  const isDisabled: boolean = email.length === 0;
  return (
    <Grid>
      <Arrow />
      <div className="custom_page">
        <header className="custom_header">
          <PageTitle
            title={"Recover password"}
            description={"Choose a recovery method"}
          />

          <Input
            id="cod"
            status={error ? "error" : ""}
            value={email}
            onChange={handleCodeChange}
            title={"Email"}
            text={"Email"}
            type={"Email"}
          >
            {error ? <span style={{ color: "red" }}>{ERROR_EMAIL}</span> : ""}
          </Input>
        </header>

        <Link to={"/recovery-confirm"}>
          <Button disabled={isDisabled} onClick={handleSubmit}>
            Send code
          </Button>
        </Link>
      </div>
    </Grid>
  );
};

export default Recovery;
