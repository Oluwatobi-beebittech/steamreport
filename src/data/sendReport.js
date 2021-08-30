import { getSchools } from "./getSchools";
import { getThrustleadNames } from "./getThrustleads";

class SendReportData {
  constructor(location) {
    this.location = location != "" ? location : "all";
    this.thrustleads = getThrustleadNames(location);
    this.schools = getSchools(location);
  }

  getThrustleads() {
    return this.thrustleads;
  }

  getSchools() {
    return this.schools;
  }

  getSchoolInstances() {}
}
export default SendReportData;
