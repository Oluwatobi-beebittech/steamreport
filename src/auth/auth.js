import thrustlead from "../instances/loggedInThrustlead";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(callback) {
    this.authenticated = true;
    
    thrustlead.setLocation("kano");
    callback();
  }

  logout(callback) {}

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
