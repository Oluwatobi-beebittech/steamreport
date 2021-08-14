import React from "react";
import "./App.css";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Index from "./pages/dashboard/index";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./auth/protectedRoute";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <ProtectedRoute exact path="/dashboard" component={Index} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
