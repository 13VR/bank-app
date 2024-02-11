import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageContent from "./component/page-content";
import WelcomePage from "./page/welcome-page";
import SignUp from "./page/signup";
import SignUpConfirm from "./page/signup-confirm";
import SignIn from "./page/signin";
import Recovery from "./page/recovery";
import RecoveryConfirm from "./page/recovery-confirm";

function App() {
  return (
    <div>
      <PageContent>
        <BrowserRouter>
          <Routes>
            <Route index element={<WelcomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup-confirm" element={<SignUpConfirm />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/recovery-confirm" element={<RecoveryConfirm />} />
          </Routes>
        </BrowserRouter>
      </PageContent>
    </div>
  );
}

export default App;
