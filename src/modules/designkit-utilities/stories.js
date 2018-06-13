import React from "react";
import { storiesOf } from "@storybook/react";
import "./index.scss";

storiesOf("Utilities", module).add("Borders", () => (
  <div>
    <p>Basic Box</p>
    <div className="ba b-grey shadow pa4">
      <code>ba b-grey shadow pa4</code>
    </div>
    <p>Border Colors</p>
    <div className="ba b-grey pa4 mb2">
      <code>ba b-grey</code>
    </div>
    <div className="ba b-grey-light pa4">
      <code>ba b-grey-light</code>
    </div>
    <p>Top Border</p>
    <div className="bt pt3">
      <code>bt</code>
    </div>
    <p>Bottom Border</p>
    <div className="bb pb3">
      <code>bb</code>
    </div>
    <p>Left Border</p>
    <span className="bl pl3">
      <code>bl</code>
    </span>
    <p>Right Border</p>
    <span className="br pr3">
      <code>br</code>
    </span>
  </div>
));
