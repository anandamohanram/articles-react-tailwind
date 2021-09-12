// imports
import React, { ReactElement } from "react";

import { BodyParagraphText, MainHeadingText } from "common/components";

/**
 * Header - holds the mail heading and paragraph of the app.
 *
 * @return {*}  {ReactElement<any, any>}
 */
export const Header = (): ReactElement<any, any> => {
  return (
    <header>
      <MainHeadingText>Lorem ipsum dolor</MainHeadingText>
      <BodyParagraphText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </BodyParagraphText>
    </header>
  );
};
