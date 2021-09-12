// imports
import React from "react";

import { Content, Header } from "main/components";

/**
 * AppContainer - main wrapper of the app
 *
 * @return {*}
 */
export const AppContainer = () => {
  return (
    <div
      className="grid grid-cols-1 container m-auto p-10 xl:px-60"
      style={{ minWidth: "320px" }}
    >
      <Header />
      <Content />
    </div>
  );
};
