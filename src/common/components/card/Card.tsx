// imports
import React from "react";

import { Button, SubHeadingText, CardContentText } from "common/components";

import { getOnClickHandler } from "./utils";

import type { CardProps } from "./types";

/**
 * Card - A card to display date, heading, content and a hyperlink
 *
 * @param {*} {
 *   date,
 *   heading,
 *   content,
 *   readMoreLink,
 * }
 * @return {React.ElementType}
 */
export const Card = ({ date, heading, content, readMoreLink }: CardProps) => {
  return (
    <div className="grid grid-rows-card bg-gray-200 shadow p-5 rounded">
      <span className="text-sm font-light"> {date} </span>
      <SubHeadingText> {heading} </SubHeadingText>
      <CardContentText text={content} />
      <div>
        <Button text="Read More" onClick={getOnClickHandler(readMoreLink)} />
      </div>
    </div>
  );
};
