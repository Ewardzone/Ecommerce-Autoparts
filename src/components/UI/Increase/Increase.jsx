import React from "react";
import { IncreaseStyled } from "./IncreaseStyled";

const Increase = ({ children, secondary = false }) => {
  return (
    <IncreaseStyled whileTap={{ scale: 0.95 }} secondary={secondary}>
      {children}
    </IncreaseStyled>
  );
};

export default Increase;
