import React from 'react';
import { render } from "react-dom";

import {Header, Footer, SSO} from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Components</h1>

    <Header />
    <Footer />
    <SSO />
  </div>
);

render(<App />, document.getElementById("root"));
