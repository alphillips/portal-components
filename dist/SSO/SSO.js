import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from "react";

var SSO =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SSO, _React$Component);

  function SSO() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SSO);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SSO)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onMessage = function (event) {
      // Check sender origin to be trusted
      // if (event.origin !== "https://my.expertconnect.global")
      //   return;
      var data = event.data;

      if (data.authInfo) {
        console.log(data.authInfo); // send data to the store
      }
    };

    return _this;
  }

  _createClass(SSO, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.addEventListener) {
        window.addEventListener("message", this.onMessage, false);
      } else if (window.attachEvent) {
        window.attachEvent("onmessage", this.onMessage, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("iframe", {
        tabIndex: "-1",
        "aria-hidden": "true",
        style: {
          position: "absolute",
          width: "9em",
          height: "9em",
          top: "-99em"
        },
        title: "Hidden SSO page",
        src: "sso.html"
      });
    }
  }]);

  return SSO;
}(React.Component);

export default SSO;