import { BrowserRouter, Route, Switch } from 'react-router-dom';
import paths from './paths';
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {paths.map((view) => (
          <Route
            exact
            key={view.path}
            path={view.path}
            component={view.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
