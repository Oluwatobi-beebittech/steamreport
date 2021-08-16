import React from "react";

export default function NotFound(props) {
  return (
    <div className="h-screen bg-blue-900">
      <div className="h-screen flex flex-wrap content-center">
        <div className="bg-blue-50 h-2/12 py-3 w-3/4 md:w-1/2 space-y-10 mx-auto text-center rounded-lg shadow-lg">
          <h1 className="text-2xl text-blue-900">
            <span
              class="iconify inline font-bold"
              data-icon="fluent:link-dismiss-20-filled"
            ></span>
            Oops. Page not found
          </h1>
          <button
            className="bg-blue-700 p-2 rounded-lg text-white font-medium hover:bg-blue-900"
            onClick={() => props.history.goBack()}
          >
            <span
              class="iconify inline font-bold text-2xl"
              data-icon="akar-icons:arrow-back"
            ></span>{" "}
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
