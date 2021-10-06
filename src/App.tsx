import { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps
} from "react-router-dom";
import routes from './config/routes';
import './App.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: FC = () => {

  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props: RouteComponentProps<any>) => (
              <route.component
                name={route.name}
                {...props}
                {...route.props}
              />
            )}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
