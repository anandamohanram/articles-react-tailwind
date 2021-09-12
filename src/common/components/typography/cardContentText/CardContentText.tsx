// imports
import React from "react";

import LinesEllipsis from "react-lines-ellipsis";

/**
 * CardContentText -  Displays the body text of the card.
 * Will show a maximum of 8 lines and truncate the rest to display an ellipsis
 *
 * @param {string}  text - text to display
 * @return {React.ReactElement}
 */
export const CardContentText = ({
  text,
}: {
  text: string;
}): React.ReactElement => {
  return (
    <div className="text-sm py-5">
      <LinesEllipsis
        text={text}
        maxLine={8}
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
    </div>
  );
};
