import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

import routes from "routes.js";

const Dream = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dream") {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </>
  );
};

export default Dream;
