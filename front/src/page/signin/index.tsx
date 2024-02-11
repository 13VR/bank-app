import "./index.css";
import { ChangeEventHandler, useState } from "react";
import Button from "../../component/button";
import PageTitle from "../../component/page-title";

import Grid from "../../component/grid";
import BackButton from "../../component/back-button";

import Input from "../../component/input";

import axios from "axios";
import { Link } from "react-router-dom";

const ERROR_EMAIL = "Please, enter correct email";
const ERROR_PASSWORD = "Sorry, your password is too simple";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [errorEmail, setErrorEmail] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string | null>(null);

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (email.length === 0 || password.length === 0) return null;

    try {
      const response = await axios.post("", {
        email,
        password,
      });
      if (response.status === 200) {
        console.log("Ok");
        setEmail("");
        setPassword("");
        setIsSuccess(true);
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      console.error(error);
      setErrorEmail("A user with the same name is already exist");
      setErrorPassword("Your password is wrong");
    }
  };
  const isDisabled: boolean = email.length === 0 || password.length === 0;

  return (
    <Grid>
      <BackButton />
      <div className="custom_page">
        <header className="custom_header">
          <PageTitle title={"Sign In!"} description={"Select login method"} />
          <Input
            id="email"
            onChange={handleEmailChange}
            status={errorEmail ? "error" : ""}
            value={email}
            title={"Email"}
            text={"Email"}
            type={"email"}
          >
            {errorEmail ? (
              <span style={{ color: "red" }}>{ERROR_EMAIL}</span>
            ) : (
              ""
            )}
          </Input>
          <Input
            pass
            id="password"
            onChange={handlePasswordChange}
            status={errorPassword ? "error" : ""}
            value={password}
            title={"Password"}
            text={"Password"}
            type={"password"}
          >
            {errorPassword ? (
              <span style={{ color: "red" }}>{ERROR_PASSWORD}</span>
            ) : (
              ""
            )}
          </Input>
          <span className="info">
            Forgot your password? <a href="/recovery">Restore</a>
          </span>
        </header>

        <Link to={isSuccess ? "/signup-confirm" : ""}>
          <Button onClick={handleSubmit} disabled={isDisabled}>
            Continue
          </Button>
        </Link>
      </div>
    </Grid>
  );
};

export default SignIn;
