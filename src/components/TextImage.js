import React from "react";
import { displayResolver } from "./diplayResolver";
import { components, modifiers } from "../configuration/displayConfiguration";

export default function TextImage({ display, ...props }) {
  const displayConfig = displayResolver(components, modifiers, display);
  const Component = displayConfig.Component || null;
  console.log({ display, config: displayConfig.config });
  return Component ? (
    <Component config={displayConfig.config} {...props} />
  ) : null;
}
