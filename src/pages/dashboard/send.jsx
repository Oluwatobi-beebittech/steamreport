import React, { Component } from "react";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

class SendReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchChecked: true,
      thrustlead: "",
      thrustleadAssistant: "",
    };
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
    this.handleThrustleadChange = this.handleThrustleadChange.bind(this);
    this.handleThrustleadAssistantChange = this.handleThrustleadAssistantChange.bind(
      this
    );

    /*Dummy*/
    this.thrustleads = ["Oluwatobi Akanji", "Alfred Musa"];
    this.thrustleadAssistant = ["None", ...this.thrustleads];
  }

  handleSwitchChange(e) {
    this.setState({ switchChecked: e.target.checked });
  }

  handleThrustleadChange(e) {
    this.setState({ thrustlead: e.target.value });
  }
  handleThrustleadAssistantChange(e) {
    this.setState({ thrustleadAssistant: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className="text-xl font-medium text-blue-900">
            <SendTwoToneIcon />
            Send Report
          </h1>
          <div className="rounded-lg shadow-lg bg-blue-50 md:w-3/4 p-4 text-lg md:mx-auto text-gray-700">
            <form className="space-y-4">
              <div>
                <label forName="" className="block">
                  Did the class hold?
                </label>
                <span>No</span>
                <Switch
                  checked={this.state.switchChecked}
                  onChange={this.handleSwitchChange}
                  name="Switch"
                  color="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <span>Yes</span>
              </div>
              <div
                className={
                  this.state.switchChecked ? "block space-y-6" : "hidden"
                }
              >
                <div>
                  <TextField
                    id="outlined-select-thrustlead"
                    select
                    label="Thrustlead"
                    value={
                      this.state.thrustlead === ""
                        ? this.thrustleads[0]
                        : this.state.thrustlead
                    }
                    onChange={this.handleThrustleadChange}
                    helperText="Select thrustlead"
                    variant="outlined"
                    className="md:w-1/2 w-full"
                  >
                    {this.thrustleads.map((thrustlead) => (
                      <MenuItem key={thrustlead} value={thrustlead}>
                        {thrustlead}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    id="outlined-select-thrustlead-assistant"
                    select
                    label="Thrustlead Assistant"
                    value={
                      this.state.thrustleadAssistant === ""
                        ? this.thrustleadAssistant[0]
                        : this.state.thrustleadAssistant
                    }
                    onChange={this.handleThrustleadAssistantChange}
                    helperText="Select thrustlead assistant"
                    variant="outlined"
                    className="md:w-1/2 w-full"
                  >
                    {this.thrustleadAssistant.map((thrustlead) => (
                      <MenuItem key={thrustlead} value={thrustlead}>
                        {thrustlead}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    id="outlined-select-term"
                    select
                    label="School Term"
                    value={
                      this.state.thrustlead === ""
                        ? this.thrustleads[0]
                        : this.state.thrustlead
                    }
                    onChange={this.handleThrustleadChange}
                    helperText="Select the school term"
                    variant="outlined"
                    className="md:w-1/2 w-full"
                  >
                    {this.thrustleads.map((thrustlead) => (
                      <MenuItem key={thrustlead} value={thrustlead}>
                        {thrustlead}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    id="outlined-select-week"
                    select
                    label="School Week"
                    value={
                      this.state.thrustlead === ""
                        ? this.thrustleads[0]
                        : this.state.thrustlead
                    }
                    onChange={this.handleThrustleadChange}
                    helperText="Select the week spent"
                    variant="outlined"
                    className="md:w-1/2 w-full"
                  >
                    {this.thrustleads.map((thrustlead) => (
                      <MenuItem key={thrustlead} value={thrustlead}>
                        {thrustlead}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    id="outlined-select-partner"
                    select
                    label="Partner School"
                    value={
                      this.state.thrustlead === ""
                        ? this.thrustleads[0]
                        : this.state.thrustlead
                    }
                    onChange={this.handleThrustleadChange}
                    helperText="Select the partner school"
                    variant="outlined"
                    className="md:w-1/2 w-full"
                  >
                    {this.thrustleads.map((thrustlead) => (
                      <MenuItem key={thrustlead} value={thrustlead}>
                        {thrustlead}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>

              <div className={!this.state.switchChecked ? "block" : "hidden"}>
                Why did class not hold
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SendReport;
