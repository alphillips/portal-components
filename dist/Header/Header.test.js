import React from "react";
import Header from "./Header";
import renderer from "react-test-renderer";
describe("Header", function () {
  it("renders properly", function () {
    var tree = renderer.create(React.createElement(Header, null)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});