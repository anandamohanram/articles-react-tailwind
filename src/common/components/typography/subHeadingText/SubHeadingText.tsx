// imports
import React, { PropsWithChildren } from "react";

/**
 * SubHeadingText -  Bold small text element
 *
 * @param {PropsWithChildren<null>} { children }
 * @return {React.ReactElement}
 */
export const SubHeadingText = ({ children }: PropsWithChildren<any>) => {
  return (
    <div className="font-bold font-sans text-base pt-5 truncate">
      {children}
    </div>
  );
};
