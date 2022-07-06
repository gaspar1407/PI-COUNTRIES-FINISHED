import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/Containers/NavBar.jsx";
import Home from "./components/Containers/Home.jsx";
import LandingPage from "./components/Containers/LandingPage.jsx";
import Detail from "./components/Containers/Detail.jsx";
import Activities from "./components/Containers/Activities";

export default function App() {
  return (
    <div>
      <Route path={"/inicio"} component={NavBar} />
      <Route exact path={"/"} component={LandingPage} />
      <Route exact path={"/inicio/home"} component={Home} />
      <Route
        exact
        path={"/inicio/detail/:id"}
        render={({ match }) => {
          return <Detail id={match.params.id} />;
        }}
      />
      <Route exact path={"/inicio/Activities"} component={Activities} />
    </div>
  );
}
