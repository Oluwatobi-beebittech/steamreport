import React, { Component } from "react";
import auth from "../auth/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    auth.login(() => {
      this.props.history.push("/account/dashboard");
    });
  }

  render() {
    return (
      <div className="h-screen bg-blue-900">
        <div className="h-screen flex flex-wrap content-center">
          <div className="bg-blue-50 w-3/4 md:w-1/2 mx-auto rounded-lg shadow-lg">
            <h1 className="text-2xl my-5 text-center font-medium space-x-2">
              <span
                className="iconify inline"
                data-icon="fluent:vault-16-filled"
              ></span>
              <span>Signin</span>
            </h1>

            <div className="w-5/6 mx-auto">
              <form className="space-y-2 pb-5">
                <div className="space-x-10">
                  <label
                    forName="username"
                    className="text-gray-700 hidden md:inline"
                  >
                    <span
                      className="iconify inline text-2xl text-blue-700"
                      data-icon="carbon:user-avatar-filled"
                    ></span>
                  </label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="h-10 bg-white rounded-md w-3/4 px-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent shadow-md"
                  />
                </div>

                <div className="space-x-10">
                  <label
                    forName="password"
                    className="text-gray-700 hidden md:inline"
                  >
                    <span
                      className="iconify inline text-2xl text-blue-700"
                      data-icon="ri:lock-password-fill"
                    ></span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="h-10 bg-white rounded-md w-3/4 px-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent shadow-md"
                  />
                </div>
                <div>
                  <a
                    href=""
                    className="text-blue-600 text-sm font-medium md:ml-20 ml-10"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="space-x-2 md:ml-20 ml-10">
                  <input name="remember" type="checkbox" />
                  <label className="text-sm">Remember me</label>
                </div>
                <div className="text-center">
                  <button
                    className="bg-blue-700 hover:bg-blue-900 text-white font-medium text-md px-3 py-2 rounded-md"
                    onClick={this.handleLogin}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
