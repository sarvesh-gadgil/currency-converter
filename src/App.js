import { BrowserRouter, Route, Switch } from 'react-router-dom';
import paths from './paths';

const App = () => {
  return (
    <BrowserRouter>
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
