import React from "react";

class SSO extends React.Component {

  componentDidMount() {
    if (window.addEventListener) {
        window.addEventListener("message", this.onMessage, false);
    } else if (window.attachEvent) {
        window.attachEvent("onmessage", this.onMessage, false);
    }
  }

  onMessage = (event) => {
      // Check sender origin to be trusted
      // if (event.origin !== "https://my.expertconnect.global")
      //   return;

      var data = event.data;
      if(data.authInfo){
        console.log(data.authInfo)
        // send data to the store
      }

  }

  render() {
    return <iframe
      tabIndex="-1"
      aria-hidden="true"
      style={{position:"absolute", width: "9em", height: "9em", top: "-99em"}}
      title="Hidden SSO page"
      src="sso.html">
    </iframe>;
  }
}

export default SSO;
