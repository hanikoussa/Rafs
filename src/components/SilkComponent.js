import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import silk from "/assets/peakpx.jpeg";

export default function SilkComponent() {
  return (
    <img
      className="d-block w-100"
      src={silk}
      alt="silk"
      style={{ paddingTop: 30 }}
    />
  );
}
