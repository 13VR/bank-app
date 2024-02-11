import "./index.css";

import logo from "./welcome-img.svg";
import Button from "../../component/button";
import PageTitle from "../../component/page-title";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="welcome_page">
      <header className="welcom_header">
        <PageTitle
          welcome
          title={"Hello!"}
          description={"Welcome to bank app"}
        />
        <img className="img" src={logo} alt="logo" />
      </header>
      <div className="buttons">
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
        <Link to="/signin">
          <Button notprimary>Sign In</Button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
