// imports
import React, { PropsWithChildren } from "react";

/**
 * MainHeadingText -  Bold H1 element
 *
 * @param {PropsWithChildren<Record<any>>} { children }
 * @return {React.ReactElement}
 */
export const MainHeadingText = ({ children }: PropsWithChildren<any>) => {
  return <div className="font-extrabold font-sans text-2xl">{children}</div>;
};
