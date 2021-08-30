class Thrustlead {
  constructor(
    firstName = "",
    lastName = "",
    location = "",
    email = "",
    status = ""
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.email = email;
    this.status = status;
  }

  getFirstName() {
    return this.firstName;
  }
  setFirstName(firstName) {
    this.firstName = firstName;
  }

  getLastName() {
    return this.lastName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  getFullName() {
    return this.getFirstName + " " + this.getLastName;
  }

  getLocation() {
    return this.location;
  }

  setLocation(location) {
    this.location = location;
  }

  getEmail() {
    return this.location;
  }

  setEmail(email) {
    this.email = email;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }
}
export default Thrustlead;
