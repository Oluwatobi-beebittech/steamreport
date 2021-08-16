import React, { Component } from "react";
import SaveTwoToneIcon from "@material-ui/icons/SaveTwoTone";
import DoneAllTwoToneIcon from "@material-ui/icons/DoneAllTwoTone";
import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";
import ScheduleTwoToneIcon from "@material-ui/icons/ScheduleTwoTone";
import SchoolTwoToneIcon from "@material-ui/icons/SchoolTwoTone";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded-lg shadow text-blue-900">
            <h1 className="font-bold text-lg">Submitted Reports</h1>
            <SaveTwoToneIcon fontSize="large" />
            <span className="text-2xl font-bold">50</span>
          </div>
          <div className="p-4 bg-green-100 rounded-lg shadow-lg text-green-900">
            <h1 className="font-bold text-lg ">Classes Held</h1>
            <DoneAllTwoToneIcon fontSize="large" />
            <span className="text-2xl font-bold">50</span>
          </div>
          <div className="p-4 bg-red-100 rounded-lg shadow-lg text-red-900">
            <h1 className="font-bold text-lg">Classes not Held</h1>
            <HighlightOffTwoToneIcon fontSize="large" />
            <span className="text-2xl font-bold">50</span>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg shadow-lg text-yellow-900">
            <h1 className="font-bold text-lg">Hours logged</h1>
            <ScheduleTwoToneIcon fontSize="large" />
            <span className="text-2xl font-bold">50</span>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg shadow-lg text-purple-900">
            <h1 className="font-bold text-lg">Assigned Schools</h1>
            <SchoolTwoToneIcon fontSize="large" />
            <span className="text-2xl font-bold">50</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
