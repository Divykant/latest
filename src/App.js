import "./App.css";
import Error from "./Components/Error/Error";
import Register from "./Components/Register/Register";
import { Route, Switch } from "react-router-dom";
import Test from "./Components/Test/Test";
import Instruction from "./Components/Instruction/Instruction";
import Login from "./Components/Login/Login";
import Feedback from "./Components/Feedback/Feedback";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/instruction" component={Instruction} />
        <Route path="/test" component={Test} />
        <Route path="/register" component={Register} />
        <Route component={Error} />
      </Switch>
      {/* <Feedback/> */}
    </>
  );
}

export default App;
