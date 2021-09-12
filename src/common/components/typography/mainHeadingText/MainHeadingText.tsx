// imports
import React, { PropsWithChildren } from "react";

/**
 * MainHeadingText -  Bold H1 element
 *
 * @param {PropsWithChildren<null>} { children }
 * @return {React.ReactElement}
 */
export const MainHeadingText = ({ children }: PropsWithChildren<null>) => {
  return <div className="font-extrabold font-sans text-2xl">{children}</div>;
};
