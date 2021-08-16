import React, { Component } from "react";
import Navigation from "../../ui/mainNav";
import { Switch, Route, Router } from "react-router-dom";
import ProtectedRoute from "../../auth/protectedRoute";
import Dashboard from "./dashboard";
import Settings from "./settings";
import SendReport from "./send";
import FetchReport from "./fetch";
import Notification from "./notification";
import NotFound from "../../pages/notFound";

export default function Index() {
  return (
    <div>
      <Navigation>
        <div className="">
          <Switch>
            <ProtectedRoute
              exact
              path="/account/dashboard"
              component={Dashboard}
            />
            <ProtectedRoute
              exact
              path="/account/settings"
              component={Settings}
            />
            <ProtectedRoute exact path="/account/send" component={SendReport} />
            <ProtectedRoute
              exact
              path="/account/fetch"
              component={FetchReport}
            />
            <ProtectedRoute
              exact
              path="/account/notification"
              component={Notification}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Navigation>
    </div>
  );
}
