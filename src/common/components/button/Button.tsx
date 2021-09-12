// imports
import React from "react";

import type { ButtonProps } from "./types/ButtonProps";

/**
 * Button - A blue button with white text
 *
 * @param {ButtonProps} { text - Button text, onClick - on click function }
 * @return {React.ElementType}
 */
export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className=" bg-blue-600 rounded hover:shadow-lg active:bg-blue-700 px-3 py-2 text-white"
      onClick={onClick}
      data-testid="button"
    >
      {text}
    </button>
  );
};
