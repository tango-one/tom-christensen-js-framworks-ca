// libraries
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

// styles
import "./App.css";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Game from "./pages/Game";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  //states
  const [data, setData] = useState([]);

  // fetch
  useEffect(() => {
    console.log("app js");
    fetch("https://api.rawg.io/api/games")
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home data={data} />
        </Route>
        <Route path='/contact' component={Contact} />
        <Route path='/game/:id' component={Game} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
