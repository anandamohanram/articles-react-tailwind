// imports
import React from "react";

import type { PropsWithChildren } from "react";

/**
 * BodyParagraphText -  Wrapper for the paragraphs in the app.
 *
 * @param {PropsWithChildren<any>} { children }
 * @return {React.ReactElement}
 */
export const BodyParagraphText = ({
  children,
}: PropsWithChildren<any>): React.ReactElement => {
  return <div className="font-normal font-sans text-base py-4">{children}</div>;
};
