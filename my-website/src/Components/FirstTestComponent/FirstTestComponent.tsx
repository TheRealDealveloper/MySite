import React, { FC } from "react";
import "./FirstTestComponent.css";

interface FirstTestComponentProps {}

const FirstTestComponent: FC<FirstTestComponentProps> = () => (
  <div className="FirstTestComponent">My first component</div>
);

export default FirstTestComponent;
