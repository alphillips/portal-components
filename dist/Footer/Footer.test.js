import React from "react";
import Footer from "./Footer";
import renderer from "react-test-renderer";
describe("Footer", function () {
  it("renders properly", function () {
    var tree = renderer.create(React.createElement(Footer, null)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});