import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Badge from "@material-ui/core/Badge";
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import CallReceivedTwoToneIcon from "@material-ui/icons/CallReceivedTwoTone";
import SettingsInputComponentTwoToneIcon from "@material-ui/icons/SettingsInputComponentTwoTone";
import NotificationsNoneTwoToneIcon from "@material-ui/icons/NotificationsNoneTwoTone";
import { useHistory } from "react-router-dom";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles({
  root: {
    width: "80%",
    height: "80px",
    backgroundColor: "#eff6ff",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default function MobileBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const notificationIcon = (
    <Badge badgeContent={4} color="primary">
      <NotificationsNoneTwoToneIcon />
    </Badge>
  );
  const history = useHistory();
  return (
    <React.Fragment>
      {props.children}

      <div className="fixed bottom-0 right-5 mb-24">
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => history.push("/account/settings")}
        >
          <SettingsInputComponentTwoToneIcon />
        </Fab>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-blue-50">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Dashboard"
            icon={<DashboardTwoToneIcon />}
            onClick={() => history.push("/account/dashboard")}
          />
          <BottomNavigationAction
            label="Send"
            icon={<SendTwoToneIcon />}
            onClick={() => history.push("/account/send")}
          />
          <BottomNavigationAction
            label="Fetch"
            icon={<CallReceivedTwoToneIcon />}
            onClick={() => history.push("/account/fetch")}
          />
          {/* <BottomNavigationAction
            label="More"
            icon={<SettingsInputComponentTwoToneIcon />}
            onClick={() => history.push("/account/settings")}
          /> */}
          <BottomNavigationAction
            label="Notifications"
            icon={notificationIcon}
            onClick={() => history.push("/account/notification")}
          />
        </BottomNavigation>
      </div>
    </React.Fragment>
  );
}
