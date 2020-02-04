import React from "react";
import Login from "./Login"
import CreateAccount from "./CreateAccount"
import VideoDisplay from "./VideoDisplay"
import Teams from "./Teams"
import TeamDisplay from "./TeamDisplay"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = (
  <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Login" component={Login} />
        <Route path="/CreateAccount" component={CreateAccount} />
        <Route path="/Home" component={VideoDisplay} />
        <Route exact path="/Teams" component={Teams} />
        <Route path="/Teams/:team" component={TeamDisplay} />
      </Switch>

  </Router>
)

export default App




// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
// const routes = [
//   {
//     path: "/Login",
//     component: Login
//   },
//   {
//     path: "/CreateAccount",
//     component: CreateAccount,
//   }
// ];

// export default function RouteConfigExample() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           {routes.map((route, i) => (
//             <RouteWithSubRoutes key={i} {...route} />
//           ))}
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // A special wrapper for <Route> that knows how to
// // handle "sub"-routes by passing them in a `routes`
// // prop to the component it renders.
// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }
