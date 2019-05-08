import React from "react";
import PropTypes from "prop-types";
import { BoxProps } from "./types/box-types";
import { propTypes } from "./enhancers";
import enhanceProps from "./enhance-props";

export const Box: React.FC<BoxProps> = ({ is = "div", innerRef, children, ...props }) => {
  // Convert the CSS props to class names (and inject the styles)
  const { className, enhancedProps: parsedProps } = enhanceProps(props);

  parsedProps.className = className;

  if (innerRef) {
    parsedProps.ref = (node: React.ReactNode) => {
      innerRef(node);
    };
  }

  return React.createElement(is, parsedProps, children);
};

Box.displayName = "Box";

Box.propTypes = {
  ...propTypes,
  innerRef: PropTypes.func,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func]) as PropTypes.Validator<
    keyof JSX.IntrinsicElements | React.ComponentClass<any, any> | React.FunctionComponent<any>
  >,
  boxSizing: propTypes.boxSizing
};

Box.defaultProps = {
  innerRef: undefined,
  is: "div",
  boxSizing: "border-box"
};

export default Box;
