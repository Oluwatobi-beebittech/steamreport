import React from "react";
import MiniDrawer from "./miniDrawer";
import MobileBottomNavigation from "./bottomNav";
export default function Navigation(props) {
  return (
    <React.Fragment>
      <div className="block md:hidden">
        <MobileBottomNavigation>{props.children}</MobileBottomNavigation>
      </div>
      <div className="hidden md:block">
        <MiniDrawer>{props.children}</MiniDrawer>
      </div>
    </React.Fragment>
  );
}
